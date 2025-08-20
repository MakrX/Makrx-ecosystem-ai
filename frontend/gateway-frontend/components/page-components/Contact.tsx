'use client';

import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  Building2, ShoppingCart, GraduationCap, HelpCircle,
  MessageSquare, Calendar, ArrowRight, Star, ChevronDown
} from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  href: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description, contact, href }) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700">
    <div className="w-16 h-16 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-2xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
    <a 
      href={href}
      className="text-makrx-blue dark:text-makrx-yellow font-semibold hover:text-makrx-blue/80 dark:hover:text-makrx-yellow/80 transition-colors"
    >
      {contact}
    </a>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-makrx-blue/20 dark:focus:ring-makrx-yellow/20"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">{question}</h3>
          <ChevronDown className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 bg-white dark:bg-slate-800">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-makrx-blue via-makrx-blue/90 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-makrx-yellow/20 text-makrx-yellow text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build
            <span className="block bg-gradient-to-r from-makrx-yellow to-yellow-300 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Have questions about our makerspaces, need technical support, or want to partner with us? 
            We&apos;re here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactCard
              icon={<Building2 className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="Makerspace Support"
              description="Questions about equipment, bookings, or makerspace locations across India."
              contact="makerspaces@makrx.org"
              href="mailto:makerspaces@makrx.org"
            />

            <ContactCard
              icon={<ShoppingCart className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="Store & Orders"
              description="Help with orders, products, shipping, or supplier partnerships."
              contact="store@makrx.org"
              href="mailto:store@makrx.org"
            />

            <ContactCard
              icon={<GraduationCap className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="Education & Training"
              description="Workshop inquiries, corporate training, and educational partnerships."
              contact="education@makrx.org"
              href="mailto:education@makrx.org"
            />

            <ContactCard
              icon={<HelpCircle className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="Technical Support"
              description="Platform issues, account problems, or technical assistance."
              contact="support@makrx.org"
              href="mailto:support@makrx.org"
            />

            <ContactCard
              icon={<Phone className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="Phone Support"
              description="Urgent matters or prefer to speak directly with our team."
              contact="+91 80 4567 8900"
              href="tel:+918045678900"
            />

            <ContactCard
              icon={<MessageSquare className="w-8 h-8 text-makrx-blue dark:text-makrx-yellow" />}
              title="General Inquiries"
              description="Business partnerships, media inquiries, or general questions."
              contact="hello@makrx.org"
              href="mailto:hello@makrx.org"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We typically respond within 24 hours
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-3xl p-8 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-makrx-blue dark:focus:ring-makrx-yellow focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-makrx-blue dark:focus:ring-makrx-yellow focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-makrx-blue dark:focus:ring-makrx-yellow focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="makerspace">Makerspace Support</option>
                    <option value="store">Store & Orders</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="education">Education & Training</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-makrx-blue dark:focus:ring-makrx-yellow focus:border-transparent transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-makrx-blue dark:focus:ring-makrx-yellow focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-makrx-blue dark:bg-makrx-yellow text-white dark:text-makrx-blue rounded-xl font-bold text-lg hover:bg-makrx-blue/90 dark:hover:bg-makrx-yellow/90 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white dark:border-makrx-blue border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            <FAQItem
              question="How do I book a makerspace?"
              answer="You can book any of our 50+ makerspaces through the MakrCave platform. Simply browse locations, check availability, and book equipment by the hour or day. All bookings include basic training and safety orientation."
            />

            <FAQItem
              question="What equipment is available in makerspaces?"
              answer="Our makerspaces feature 3D printers, laser cutters, CNC machines, electronics labs, woodworking tools, and more. Each location has slightly different equipment - check the specific makerspace page for detailed inventory."
            />

            <FAQItem
              question="Do you offer training and workshops?"
              answer="Yes! We offer regular workshops on 3D printing, laser cutting, electronics, programming, and more. We also provide corporate training and educational partnerships. Check our events page or contact education@makrx.org."
            />

            <FAQItem
              question="How does MakrX.Store delivery work?"
              answer="We offer same-day delivery in major cities and 1-3 day delivery nationwide. Free shipping on orders over ₹1000. Track your order through your account dashboard or email notifications."
            />

            <FAQItem
              question="Can I get custom fabrication services?"
              answer="Absolutely! 3D.MakrX.Store connects you with certified professionals for custom 3D printing, laser cutting, PCB fabrication, and CNC machining. Upload your files and get instant quotes."
            />

            <FAQItem
              question="What are your business hours?"
              answer="Most makerspaces are open 9 AM - 9 PM daily. Online support is available 24/7 through our platform. Phone support is available 9 AM - 6 PM Monday-Friday. Emergency technical support is available 24/7."
            />
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Visit Our Headquarters
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Located in the heart of Bangalore&apos;s tech district, our headquarters 
                houses our main makerspace, training center, and customer support team.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-makrx-blue dark:text-makrx-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      MakrX Technologies Pvt Ltd<br />
                      #42, 3rd Floor, Koramangala<br />
                      Bangalore, Karnataka 560034<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-makrx-blue/10 dark:bg-makrx-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-makrx-blue dark:text-makrx-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-slate-700 rounded-3xl p-8 text-center">
              <div className="w-full h-64 bg-gray-200 dark:bg-slate-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interactive map coming soon. For now, use the address above with your preferred maps application.
              </p>
              <a
                href="https://maps.google.com/?q=Koramangala,Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-makrx-blue dark:bg-makrx-yellow text-white dark:text-makrx-blue rounded-xl font-semibold hover:bg-makrx-blue/90 dark:hover:bg-makrx-yellow/90 transition-colors"
              >
                Open in Maps
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
