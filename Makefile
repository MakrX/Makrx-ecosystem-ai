# MakrX Ecosystem Development Makefile
.PHONY: help dev up down build clean logs test install lint format security

# Default target
help: ## Show this help message
	@echo "MakrX Ecosystem Development Commands"
	@echo "====================================="
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# Development Environment
dev: ## Start development environment
	@echo "🚀 Starting MakrX development environment..."
	docker-compose up -d postgres redis minio keycloak
	@echo "⏳ Waiting for services to be ready..."
	sleep 30
	docker-compose up makrcave-backend makrx-store-backend

dev-full: ## Start full development environment including frontends
	@echo "🚀 Starting full MakrX development environment..."
	docker-compose up -d

dev-down: ## Stop development environment
	@echo "🛑 Stopping development environment..."
	docker-compose down

# Production Environment  
prod-up: ## Start production environment
	@echo "🚀 Starting MakrX production environment..."
	docker-compose -f docker-compose.prod.yml up -d

prod-down: ## Stop production environment
	@echo "🛑 Stopping production environment..."
	docker-compose -f docker-compose.prod.yml down

# Build Commands
build: ## Build all Docker images
	@echo "🔨 Building all Docker images..."
	docker-compose build

build-no-cache: ## Build all Docker images without cache
	@echo "🔨 Building all Docker images (no cache)..."
	docker-compose build --no-cache

# Database Commands
db-migrate: ## Run database migrations
	@echo "📊 Running database migrations..."
	docker-compose exec makrcave-backend python -m alembic upgrade head
	docker-compose exec makrx-store-backend python -m alembic upgrade head

db-reset: ## Reset development database
	@echo "⚠️  Resetting development database..."
	docker-compose down postgres
	docker volume rm makrx_postgres_data || true
	docker-compose up -d postgres
	sleep 10
	make db-migrate

# Install Dependencies
install: ## Install all dependencies
	@echo "📦 Installing dependencies..."
	cd frontend/gateway-frontend && npm ci
	cd frontend/makrcave-frontend && npm ci
	cd makrx-store-frontend && npm ci
	cd makrcave-backend && pip install -r requirements.txt
	cd makrx-store-backend && pip install -r requirements.txt

# Code Quality
lint: ## Run linting on all projects
	@echo "🔍 Running linting..."
	cd frontend/gateway-frontend && npm run lint
	cd frontend/makrcave-frontend && npm run lint
	cd makrx-store-frontend && npm run lint
	cd makrcave-backend && ruff check .
	cd makrx-store-backend && ruff check app

lint-fix: ## Fix linting issues
	@echo "🔧 Fixing linting issues..."
	cd frontend/gateway-frontend && npm run lint:fix
	cd frontend/makrcave-frontend && npm run lint:fix
	cd makrx-store-frontend && npm run lint:fix
	cd makrcave-backend && ruff check . --fix
	cd makrx-store-backend && ruff check app --fix

format: ## Format all code
	@echo "✨ Formatting code..."
	cd frontend/gateway-frontend && npm run format
	cd frontend/makrcave-frontend && npm run format
	cd makrx-store-frontend && npm run format
	cd makrcave-backend && black .
	cd makrx-store-backend && black app

# Testing
test: ## Run all tests
	@echo "🧪 Running tests..."
	cd frontend/gateway-frontend && npm test
	cd frontend/makrcave-frontend && npm test
	cd makrx-store-frontend && npm test
	cd makrcave-backend && pytest
	cd makrx-store-backend && pytest

test-coverage: ## Run tests with coverage
	@echo "🧪 Running tests with coverage..."
	cd makrcave-backend && pytest --cov=.
	cd makrx-store-backend && pytest --cov=app

# Security
security: ## Run security checks
	@echo "🔒 Running security checks..."
	cd makrcave-backend && safety check
	cd makrx-store-backend && safety check
	cd frontend/gateway-frontend && npm audit
	cd frontend/makrcave-frontend && npm audit
	cd makrx-store-frontend && npm audit

security-fix: ## Fix security vulnerabilities
	@echo "🔧 Fixing security vulnerabilities..."
	cd frontend/gateway-frontend && npm audit fix
	cd frontend/makrcave-frontend && npm audit fix
	cd makrx-store-frontend && npm audit fix

# Logs and Monitoring
logs: ## Follow logs from all services
	docker-compose logs -f

logs-backend: ## Follow backend logs only
	docker-compose logs -f makrcave-backend makrx-store-backend

logs-frontend: ## Follow frontend logs only
	docker-compose logs -f gateway-frontend makrcave-frontend makrx-store-frontend

# Cleanup
clean: ## Clean up Docker resources
	@echo "🧹 Cleaning up Docker resources..."
	docker-compose down --volumes --remove-orphans
	docker system prune -f

clean-all: ## Clean up everything including images
	@echo "🧹 Cleaning up everything..."
	docker-compose down --volumes --remove-orphans
	docker system prune -af
	docker volume prune -f

# Health Checks
health: ## Check health of all services
	@echo "🏥 Checking service health..."
	@echo "Database:"
	@docker-compose exec postgres pg_isready -U makrx -d makrx_dev || echo "❌ Database not ready"
	@echo "Redis:"
	@docker-compose exec redis redis-cli ping || echo "❌ Redis not ready"
	@echo "MakrCave Backend:"
	@curl -sf http://localhost:8000/health || echo "❌ MakrCave Backend not ready"
	@echo "Store Backend:"
	@curl -sf http://localhost:8001/health || echo "❌ Store Backend not ready"

# Environment Setup
env-setup: ## Set up environment files
	@echo "⚙️  Setting up environment files..."
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "✅ Created .env file from template"; \
		echo "⚠️  Please edit .env with your actual values"; \
	else \
		echo "ℹ️  .env file already exists"; \
	fi

# Development Workflow
dev-setup: env-setup install build ## Complete development setup
	@echo "🎉 Development environment setup complete!"
	@echo "Run 'make dev' to start the development environment"

# Quick Commands
up: dev ## Alias for dev
down: dev-down ## Alias for dev-down
restart: down up ## Restart development environment
