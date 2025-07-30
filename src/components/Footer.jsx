import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Users,
  GraduationCap,
  BookOpen,
  Clock
} from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const footerSections = [
    {
      title: 'About Us',
      links: [
        { name: 'Our Mission', href: '#mission' },
        { name: 'Leadership Team', href: '#team' },
        { name: 'Partner Organizations', href: '#partners' },
      ]
    },
    {
      title: 'Programs',
      links: [
        { name: 'Primary Education Support', href: '#primary-education' },
        { name: 'Secondary Scholarships', href: '#secondary-scholarships' },
        { name: 'Technology Training', href: '#tech-training' },
      ]
    },
    {
      title: 'Get Involved',
      links: [
        { name: 'Volunteer Opportunities', href: '#volunteer' },
        { name: 'Donate', href: '#donate' },
        { name: 'Corporate Partnerships', href: '#partnerships' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Success Stories', href: '#stories' },
        { name: 'News & Updates', href: '#news' },
        { name: 'Photo Gallery', href: '#gallery' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ];

  const quickStats = [
    { icon: Users, number: '2,500+', label: 'Students Supported' },
    { icon: GraduationCap, number: '2,200+', label: 'Graduates' },
    { icon: BookOpen, number: '15', label: 'Active Programs' },
    { icon: Heart, number: '500+', label: 'Active Donors' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Newsletter & Emergency Contact Section */}
        <div className="border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-300 mb-4">
                Get updates on our programs, success stories, and ways to get involved in transforming lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 text-center border border-gray-700">
              <div className="space-y-3">
                <div className="flex items-center text-gray-200">
                  <Mail className="h-5 w-5 mr-3 text-white" />
                  <span>info@rikeyoyouth.org</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-white" />
                  <span>+254 712 345 678</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-white" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-3 text-white" />
                  <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© 2024 Rikeyo Youth Organization. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>for Kenyan Youth</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm hidden sm:block">Follow our journey:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`text-gray-400 ${social.color} transition-colors duration-200`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer