import React, { useState } from 'react';
import { 
  GraduationCap, 
  Laptop, 
  Users, 
  Heart,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  BookOpen
} from 'lucide-react';

const ProgramsSection = () => {
    const [activeProgram, setActiveProgram] = useState(0);

    const programs = [
        {
            id: 'primary-education',
            title: 'Primary Education Support',
            subtitle: 'Building Strong Foundations',
            description: 'Comprehensive support for primary school students including school fees, uniforms, learning materials, and nutritional support.',
            icon: BookOpen,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            features: [
                'School fees coverage',
                'Learning materials & uniforms',
                'Nutritional support program',
                'Academic mentorship',
                'Parent engagement workshops'
            ],
            stats: {
                beneficiaries: '1,200+',
                success_rate: '95%',
                locations: '25 Schools'
            },
            eligibility: [
                'Family income below poverty line',
                'Academic potential demonstrated',
                'Community recommendation',
                'Commitment to program requirements'
            ],
            image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop'
        },
        {
            id: 'secondary-scholarships',
            title: 'Secondary School Scholarships',
            subtitle: 'Pathway to Higher Education',
            description: 'Full scholarships for high-performing students to complete secondary education with career guidance and university preparation.',
            icon: GraduationCap,
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
            features: [
                'Full tuition & boarding costs',
                'University preparation classes',
                'Career guidance counseling',
                'Leadership development',
                'Alumni mentorship network'
            ],
            stats: {
                beneficiaries: '800+',
                success_rate: '92%',
                locations: '45 Schools'
            },
            eligibility: [
                'KCPE score of 300+ marks',
                'Financial need demonstrated',
                'Leadership potential',
                'Community service commitment'
            ],
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop'
        },
        {
            id: 'tech-training',
            title: 'Technology Training',
            subtitle: 'Digital Skills for the Future',
            description: 'Comprehensive technology training including computer literacy, coding, digital marketing, and entrepreneurship skills.',
            icon: Laptop,
            color: 'from-green-500 to-green-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
            features: [
                'Computer literacy courses',
                'Web development & coding',
                'Digital marketing training',
                'Entrepreneurship workshops',
                'Job placement assistance'
            ],
            stats: {
                beneficiaries: '500+',
                success_rate: '88%',
                locations: '8 Centers'
            },
            eligibility: [
                'Age 16-35 years',
                'Basic literacy skills',
                'Commitment to 6-month program',
                'Post-training service agreement'
            ],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
        },
        {
            id: 'youth-development',
            title: 'Youth Development',
            subtitle: 'Building Tomorrow\'s Leaders',
            description: 'Holistic youth development through life skills, leadership training, sports, arts, and community engagement programs.',
            icon: Users,
            color: 'from-pink-500 to-pink-600',
            bgColor: 'bg-pink-50',
            borderColor: 'border-pink-200',
            features: [
                'Leadership & life skills training',
                'Sports & recreation programs',
                'Arts & cultural activities',
                'Community service projects',
                'Peer mentorship networks'
            ],
            stats: {
                beneficiaries: '2,000+',
                success_rate: '85%',
                locations: '15 Centers'
            },
            eligibility: [
                'Age 12-25 years',
                'Community residence',
                'Regular participation commitment',
                'Parent/guardian consent (minors)'
            ],
            image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop'
        }
    ];

    const currentProgram = programs[activeProgram];

    return (
        <section id="programs" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Programs
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive educational and development programs designed to break the cycle of poverty 
                        and create lasting change in Kenyan communities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:items-start">
                    
                    {/* Program Navigation */}
                    <div className="lg:col-span-4">
                        <div className="space-y-4 lg:sticky lg:top-8">
                            {programs.map((program, index) => {
                                const IconComponent = program.icon;
                                const isActive = index === activeProgram;
                                
                                return (
                                    <button
                                        key={program.id}
                                        onClick={() => setActiveProgram(index)}
                                        className={`w-full text-left p-8 rounded-xl border-2 transition-all duration-300 min-h-[140px] flex items-center ${
                                            isActive 
                                                ? `${program.bgColor} ${program.borderColor} shadow-lg` 
                                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                        }`}
                                    >
                                        <div className="flex items-start">
                                            <div className={`p-3 rounded-lg ${isActive ? 'bg-white' : 'bg-white'} mr-4`}>
                                                <IconComponent className={`w-6 h-6 ${isActive ? 'text-gray-700' : 'text-gray-500'}`} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`font-semibold text-lg mb-1 ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                                                    {program.title}
                                                </h3>
                                                <p className={`text-sm ${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                                                    {program.subtitle}
                                                </p>
                                                <div className="flex items-center mt-2 space-x-4 text-xs">
                                                    <span className={`${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                                                        {program.stats.beneficiaries} served
                                                    </span>
                                                    <span className={`${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                                                        {program.stats.success_rate} success rate
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Program Details */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-h-full">
                            
                            {/* Program Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={currentProgram.image} 
                                    alt={currentProgram.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-white font-medium text-sm bg-gradient-to-r ${currentProgram.color}`}>
                                    {currentProgram.title}
                                </div>
                            </div>

                            {/* Program Content */}
                            <div className="p-8">
                                
                                {/* Description */}
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {currentProgram.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    
                                    {/* Features */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                            What We Provide
                                        </h4>
                                        <ul className="space-y-3">
                                            {currentProgram.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-gray-600">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Eligibility */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                            <Users className="w-5 h-5 text-purple-500 mr-2" />
                                            Eligibility Criteria
                                        </h4>
                                        <ul className="space-y-3">
                                            {currentProgram.eligibility.map((criteria, index) => (
                                                <li key={index} className="flex items-center text-gray-600">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                                    {criteria}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {currentProgram.stats.beneficiaries}
                                            </div>
                                            <div className="text-sm text-gray-600">Beneficiaries</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {currentProgram.stats.success_rate}
                                            </div>
                                            <div className="text-sm text-gray-600">Success Rate</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900 mb-1">
                                                {currentProgram.stats.locations}
                                            </div>
                                            <div className="text-sm text-gray-600">Locations</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <button className={`flex-1 bg-gradient-to-r ${currentProgram.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center`}>
                                        Apply for Program
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </button>
                                    <button className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                                        <Heart className="mr-2 h-5 w-5 text-red-500" />
                                        Support This Program
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Transform Lives?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Whether you're looking to apply for a program or support our mission, 
                            we're here to help you make a difference in the lives of Kenyan youth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                                <BookOpen className="mr-2 h-5 w-5" />
                                View All Applications
                            </button>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                                <Heart className="mr-2 h-5 w-5" />
                                Become a Sponsor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgramsSection;