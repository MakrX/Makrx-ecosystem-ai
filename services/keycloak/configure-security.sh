#!/bin/bash

# MakrX Keycloak Security Configuration Script
# This script configures Keycloak with secure settings for production

set -euo pipefail

KEYCLOAK_URL="${KEYCLOAK_URL:-http://localhost:8080}"
ADMIN_USER="${KEYCLOAK_ADMIN:-admin}"
ADMIN_PASS="${KEYCLOAK_ADMIN_PASSWORD:-admin}"
REALM="${KEYCLOAK_REALM:-makrx}"

echo "🔐 Configuring Keycloak security settings..."

# Function to execute Keycloak admin CLI commands
kc_admin() {
    curl -s -X POST "${KEYCLOAK_URL}/admin/realms/${REALM}/$1" \
        -H "Authorization: Bearer ${ACCESS_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "$2"
}

# Get admin access token
echo "🔑 Obtaining admin access token..."
TOKEN_RESPONSE=$(curl -s -X POST "${KEYCLOAK_URL}/realms/master/protocol/openid-connect/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "username=${ADMIN_USER}" \
    -d "password=${ADMIN_PASS}" \
    -d "grant_type=password" \
    -d "client_id=admin-cli")

ACCESS_TOKEN=$(echo "${TOKEN_RESPONSE}" | jq -r '.access_token')

if [ "${ACCESS_TOKEN}" = "null" ]; then
    echo "❌ Failed to obtain access token"
    echo "Response: ${TOKEN_RESPONSE}"
    exit 1
fi

echo "✅ Access token obtained"

# Configure realm security settings
echo "🛡️ Configuring realm security settings..."

# Update realm with secure settings
REALM_CONFIG='{
  "bruteForceProtected": true,
  "failureFactor": 3,
  "maxFailureWaitSeconds": 900,
  "maxDeltaTimeSeconds": 43200,
  "permanentLockout": false,
  "quickLoginCheckMilliSeconds": 1000,
  "waitIncrementSeconds": 60,
  "sslRequired": "external",
  "passwordPolicy": "length(14) and lowerCase(1) and upperCase(1) and digits(1) and specialChars(2) and passwordHistory(12) and notUsername and notEmail",
  "accessTokenLifespan": 900,
  "accessTokenLifespanForImplicitFlow": 300,
  "refreshTokenLifespan": 1800,
  "ssoSessionIdleTimeout": 1800,
  "ssoSessionMaxLifespan": 28800,
  "eventsEnabled": true,
  "adminEventsEnabled": true,
  "adminEventsDetailsEnabled": true,
  "verifyEmail": true,
  "loginWithEmailAllowed": true,
  "duplicateEmailsAllowed": false,
  "resetPasswordAllowed": true,
  "editUsernameAllowed": false,
  "registrationAllowed": false,
  "userManagedAccessAllowed": false
}'

curl -s -X PUT "${KEYCLOAK_URL}/admin/realms/${REALM}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "${REALM_CONFIG}"

echo "✅ Realm security settings updated"

# Configure client security settings
echo "🔒 Configuring client security settings..."

# Array of client IDs to secure
CLIENTS=("makrcave-backend" "makrx-store-backend" "makrx-gateway-frontend" "makrcave-frontend" "makrx-store-frontend")

for CLIENT_ID in "${CLIENTS[@]}"; do
    echo "🔧 Configuring client: ${CLIENT_ID}"
    
    # Get client UUID
    CLIENT_UUID=$(curl -s -X GET "${KEYCLOAK_URL}/admin/realms/${REALM}/clients?clientId=${CLIENT_ID}" \
        -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq -r '.[0].id')
    
    if [ "${CLIENT_UUID}" = "null" ]; then
        echo "⚠️ Client ${CLIENT_ID} not found, skipping..."
        continue
    fi
    
    # Configure client security based on type
    if [[ "${CLIENT_ID}" == *"backend"* ]]; then
        # Backend service configuration
        CLIENT_CONFIG='{
          "bearerOnly": true,
          "standardFlowEnabled": false,
          "implicitFlowEnabled": false,
          "directAccessGrantsEnabled": false,
          "serviceAccountsEnabled": true,
          "publicClient": false,
          "frontchannelLogout": false,
          "fullScopeAllowed": false,
          "attributes": {
            "access.token.lifespan": "900",
            "tls.client.certificate.bound.access.tokens": "false"
          }
        }'
    else
        # Frontend client configuration
        CLIENT_CONFIG='{
          "bearerOnly": false,
          "standardFlowEnabled": true,
          "implicitFlowEnabled": false,
          "directAccessGrantsEnabled": false,
          "serviceAccountsEnabled": false,
          "publicClient": false,
          "frontchannelLogout": true,
          "fullScopeAllowed": false,
          "attributes": {
            "pkce.code.challenge.method": "S256",
            "access.token.lifespan": "900",
            "oauth2.device.authorization.grant.enabled": "false",
            "oidc.ciba.grant.enabled": "false",
            "require.pushed.authorization.requests": "false",
            "tls.client.certificate.bound.access.tokens": "false"
          }
        }'
    fi
    
    curl -s -X PUT "${KEYCLOAK_URL}/admin/realms/${REALM}/clients/${CLIENT_UUID}" \
        -H "Authorization: Bearer ${ACCESS_TOKEN}" \
        -H "Content-Type: application/json" \
        -d "${CLIENT_CONFIG}"
    
    echo "✅ Client ${CLIENT_ID} configured"
done

# Configure security headers
echo "🛡️ Configuring security headers..."

SECURITY_HEADERS='{
  "browserSecurityHeaders": {
    "contentSecurityPolicyReportOnly": "",
    "xContentTypeOptions": "nosniff",
    "xRobotsTag": "none", 
    "xFrameOptions": "SAMEORIGIN",
    "contentSecurityPolicy": "frame-src '\''self'\''; frame-ancestors '\''self'\''; object-src '\''none'\'';",
    "xXSSProtection": "1; mode=block",
    "strictTransportSecurity": "max-age=31536000; includeSubDomains"
  }
}'

curl -s -X PUT "${KEYCLOAK_URL}/admin/realms/${REALM}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "${SECURITY_HEADERS}"

echo "✅ Security headers configured"

# Configure password policy
echo "🔐 Updating password policy..."

PASSWORD_POLICY='{
  "passwordPolicy": "length(14) and lowerCase(1) and upperCase(1) and digits(1) and specialChars(2) and passwordHistory(12) and notUsername and notEmail and blacklist(password,Password,12345,qwerty,admin,makrx)"
}'

curl -s -X PUT "${KEYCLOAK_URL}/admin/realms/${REALM}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "${PASSWORD_POLICY}"

echo "✅ Password policy updated"

# Enable comprehensive event logging
echo "📊 Configuring event logging..."

EVENT_CONFIG='{
  "eventsEnabled": true,
  "eventsListeners": ["jboss-logging"],
  "enabledEventTypes": [
    "LOGIN", "LOGIN_ERROR", "LOGOUT", "LOGOUT_ERROR",
    "REGISTER", "REGISTER_ERROR", "UPDATE_PROFILE", "UPDATE_PROFILE_ERROR",
    "UPDATE_PASSWORD", "UPDATE_PASSWORD_ERROR", "UPDATE_EMAIL", "UPDATE_EMAIL_ERROR",
    "VERIFY_EMAIL", "VERIFY_EMAIL_ERROR", "RESET_PASSWORD", "RESET_PASSWORD_ERROR",
    "CLIENT_LOGIN", "CLIENT_LOGIN_ERROR", "CLIENT_REGISTER", "CLIENT_REGISTER_ERROR",
    "CLIENT_UPDATE", "CLIENT_UPDATE_ERROR", "CLIENT_DELETE", "CLIENT_DELETE_ERROR",
    "GRANT_CONSENT", "REVOKE_GRANT", "UPDATE_CONSENT", "UPDATE_CONSENT_ERROR",
    "CODE_TO_TOKEN_ERROR", "TOKEN_EXCHANGE", "TOKEN_EXCHANGE_ERROR",
    "IMPERSONATE", "IMPERSONATE_ERROR", "CUSTOM_REQUIRED_ACTION", "CUSTOM_REQUIRED_ACTION_ERROR",
    "EXECUTE_ACTIONS", "EXECUTE_ACTIONS_ERROR", "EXECUTE_ACTION_TOKEN_ERROR"
  ],
  "adminEventsEnabled": true,
  "adminEventsDetailsEnabled": true
}'

curl -s -X PUT "${KEYCLOAK_URL}/admin/realms/${REALM}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "${EVENT_CONFIG}"

echo "✅ Event logging configured"

# Generate client secrets
echo "🔑 Generating secure client secrets..."

for CLIENT_ID in "${CLIENTS[@]}"; do
    if [[ "${CLIENT_ID}" == *"frontend"* ]]; then
        continue  # Frontend clients use PKCE, not client secrets
    fi
    
    echo "🔑 Generating secret for ${CLIENT_ID}..."
    
    CLIENT_UUID=$(curl -s -X GET "${KEYCLOAK_URL}/admin/realms/${REALM}/clients?clientId=${CLIENT_ID}" \
        -H "Authorization: Bearer ${ACCESS_TOKEN}" | jq -r '.[0].id')
    
    if [ "${CLIENT_UUID}" = "null" ]; then
        continue
    fi
    
    # Generate new client secret
    curl -s -X POST "${KEYCLOAK_URL}/admin/realms/${REALM}/clients/${CLIENT_UUID}/client-secret" \
        -H "Authorization: Bearer ${ACCESS_TOKEN}"
    
    echo "✅ Secret generated for ${CLIENT_ID}"
done

echo ""
echo "🎉 Keycloak security configuration completed!"
echo ""
echo "📋 Security measures implemented:"
echo "   ✅ Brute force protection enabled"
echo "   ✅ Strong password policy enforced"
echo "   ✅ SSL/TLS required for external connections"
echo "   ✅ Reduced token lifespans"
echo "   ✅ PKCE required for frontend clients"
echo "   ✅ Service accounts secured"
echo "   ✅ Comprehensive event logging enabled"
echo "   ✅ Security headers configured"
echo "   ✅ Client secrets regenerated"
echo ""
echo "⚠️ IMPORTANT:"
echo "   🔑 Update your application configs with new client secrets"
echo "   🌐 Ensure proper SSL certificates are configured"
echo "   📊 Monitor Keycloak logs for security events"
echo "   🔄 Rotate client secrets regularly"
echo ""
