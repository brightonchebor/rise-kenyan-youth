import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Star, 
  Users, 
  Award,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

const Hero = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const testimonials = [
    {
      text: "This platform transformed our business completely!",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d5c1?w=60&h=60&fit=crop&crop=face"
    },
    {
      text: "Incredible results in just 30 days of using this service.",
      author: "Michael Chen",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      text: "The best investment we've made for our company.",
      author: "Emily Rodriguez",
      role: "Founder, StartupX",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const features = [
    { icon: Zap, text: "Lightning Fast Performance" },
    { icon: Shield, text: "Enterprise Security" },
    { icon: TrendingUp, text: "Proven Results" }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "50+", label: "Countries" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          
          {/* Announcement Bar */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              🎉 New: AI-Powered Analytics Dashboard
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-6">
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Amazing
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
                That Convert
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your business with our cutting-edge platform that combines 
                powerful analytics, seamless integrations, and beautiful design to 
                drive real results.
              </p>

              {/* Feature List */}
              <div className="mt-8 space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-green-500" />
                      </div>
                      <span className="ml-3 text-gray-700 font-medium">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button 
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5 text-blue-600" />
                  Watch Demo
                </button>
              </div>

              {/* Social Proof */}
              <div className="mt-10 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="ml-3 text-gray-600">
                    <span className="font-semibold text-gray-900">10,000+</span> customers
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Content */}
            <div className="mt-16 lg:mt-0 lg:col-span-6">
              <div className="relative">
                
                {/* Main Image/Video Container */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  {isVideoPlaying ? (
                    <div className="aspect-video bg-gray-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="w-16 h-16 mx-auto mb-4" />
                        <p>Demo Video Playing...</p>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
                      alt="Dashboard Preview" 
                      className="w-full h-auto"
                    />
                  )}
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <div className="ml-2">
                        <div className="text-sm font-semibold">Revenue</div>
                        <div className="text-green-600 font-bold">+127%</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                    <div className="flex items-center">
                      <Users className="w-6 h-6 text-blue-500" />
                      <div className="ml-2">
                        <div className="text-sm font-semibold">Users</div>
                        <div className="text-blue-600 font-bold">50K+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Testimonial */}
                <div className="absolute -bottom-8 left-4 right-4 bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500">
                  <div className="flex items-start">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].author}
                      className="w-12 h-12 rounded-full flex-shrink-0"
                    />
                    <div className="ml-4 flex-1">
                      <p className="text-gray-700 italic">
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      <div className="mt-2">
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].author}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Dots */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 pt-12 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
