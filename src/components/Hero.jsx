import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  Users, 
  GraduationCap,
  BookOpen,
  Trophy,
  MapPin,
  Heart
} from 'lucide-react';
import background from '../assets/background.jpg';

const Hero = () => {
    const [currentStory, setCurrentStory] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const successStories = [
        {
            text: "From struggling with basic literacy to becoming a software developer at a leading tech company!",
            author: "Grace Wanjiku",
            role: "Software Developer, Alumni 2022",
            program: "Technology Training Program",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d5c1?w=60&h=60&fit=crop&crop=face"
        },
        {
            text: "The scholarship program changed my life completely. Now I'm pursuing engineering at university!",
            author: "Michael Kipchoge",
            role: "University Student, Alumni 2021",
            program: "Secondary Education Scholarship",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
        },
        {
            text: "Thanks to the mentorship and support, I started my own business and employ 5 other youth!",
            author: "Fatuma Hassan",
            role: "Entrepreneur, Alumni 2020",
            program: "Youth Development Program",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
        }
    ];

    const impactStats = [
        { number: "2,500+", label: "Students Supported", icon: Users },
        { number: "89%", label: "Graduation Rate", icon: GraduationCap },
        { number: "15", label: "Programs Running", icon: BookOpen },
        { number: "98%", label: "Job Placement", icon: Trophy }
    ];

    // Auto-rotate success stories
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStory((prev) => (prev + 1) % successStories.length);
        }, 5000);
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

                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                        
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-6">
                            
                            {/* Main Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Empowering
                                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Kenyan Youth
                                </span>
                                Through Education
                            </h1>

                            {/* Subheadline */}
                            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Breaking barriers through education, technology training, and mentorship. 
                                We provide scholarships, life skills, and opportunities that transform 
                                lives and strengthen communities across Kenya.
                            </p>

                            {/* Mission Points */}
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <GraduationCap className="h-6 w-6 text-green-500" />
                                    </div>
                                    <span className="ml-3 text-gray-700 font-medium">
                                        Primary & Secondary Education Scholarships
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <BookOpen className="h-6 w-6 text-green-500" />
                                    </div>
                                    <span className="ml-3 text-gray-700 font-medium">
                                        Technology & Digital Skills Training
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Users className="h-6 w-6 text-green-500" />
                                    </div>
                                    <span className="ml-3 text-gray-700 font-medium">
                                        Youth Development & Leadership Programs
                                    </span>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                                    Apply for Program
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                                
                                <button 
                                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                                    className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 flex items-center justify-center"
                                >
                                    <Play className="mr-2 h-5 w-5 text-blue-600" />
                                    Watch Our Story
                                </button>
                            </div>

                            {/* Community Impact */}
                            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                <div className="flex items-center">
                                    <div className="flex -space-x-2">
                                        {[1,2,3,4,5].map((i) => (
                                            <div key={i} className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">{String.fromCharCode(64 + i)}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className="ml-3 text-gray-600">
                                        <span className="font-semibold text-gray-900">2,500+</span> lives transformed
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                                    <span className="text-gray-600">
                                        <span className="font-semibold text-gray-900">500+</span> active donors
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Visual Content */}
                        <div className="mt-16 lg:mt-0 lg:col-span-6 space-y-8">
                            
                            {/* Main Image/Video Container - Moved Up */}
                            <div className="relative">
                                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    {isVideoPlaying ? (
                                        <div className="aspect-video bg-gray-900 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <Play className="w-16 h-16 mx-auto mb-4" />
                                                <p className="text-lg font-medium">Our Impact Story</p>
                                                <p className="text-sm text-gray-300">Documentary: Transforming Lives Through Education</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <img 
                                            src={background}
                                            alt="Students in classroom learning technology" 
                                            className="w-full h-auto"
                                        />
                                    )}
                                    
                                    {/* Floating Impact Cards */}
                                    <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-3">
                                        <div className="flex items-center">
                                            <GraduationCap className="w-6 h-6 text-blue-500" />
                                            <div className="ml-2">
                                                <div className="text-sm font-semibold">Graduates</div>
                                                <div className="text-blue-600 font-bold">2,200+</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
                                        <div className="flex items-center">
                                            <Trophy className="w-6 h-6 text-purple-500" />
                                            <div className="ml-2">
                                                <div className="text-sm font-semibold">Success Rate</div>
                                                <div className="text-purple-600 font-bold">89%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Success Story - Separated and Aligned */}
                            <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500">
                                <div className="flex items-start">
                                    <img 
                                        src={successStories[currentStory].avatar} 
                                        alt={successStories[currentStory].author}
                                        className="w-12 h-12 rounded-full flex-shrink-0"
                                    />
                                    <div className="ml-4 flex-1">
                                        <p className="text-gray-700 italic text-sm">
                                            "{successStories[currentStory].text}"
                                        </p>
                                        <div className="mt-2">
                                            <div className="font-semibold text-gray-900 text-sm">
                                                {successStories[currentStory].author}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {successStories[currentStory].role}
                                            </div>
                                            <div className="text-xs text-blue-600 font-medium">
                                                {successStories[currentStory].program}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Story Dots */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {successStories.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentStory(index)}
                                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                                index === currentStory ? 'bg-blue-600' : 'bg-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Impact Statistics Section */}
                    <div className="mt-24 pt-12 border-t border-gray-200">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Every number represents a life transformed, a dream realized, and a community strengthened.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {impactStats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={index} className="text-center group">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                                            <IconComponent className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-600 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero