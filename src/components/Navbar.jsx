import React, { useState } from 'react';
import { Menu, X, ChevronDown, Heart, Users, BookOpen, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'About Us', href: '#about' },
        { name: 'Programs', href: '#programs', hasDropdown: true },
        { name: 'Success Stories', href: '#stories' },
        { name: 'Gallery', href: '#gallery' },
    ];

    const dropdownItems = [
        { name: 'Primary Education Support', href: '#primary-education' },
        { name: 'Secondary Scholarships', href: '#secondary-scholarships' },
        { name: 'Technology Training', href: '#tech-training' },
        { name: 'Youth Development', href: '#youth-development' },
    ];

    return (
        <nav className="bg-slate-50 shadow-lg border-b border-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img src={logo} alt="logo" className="w-18 h-18 object-contain"/>
                        </div>
                        <div className="ml-3">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                Rise Kenyan Youth
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative">
                                    {item.hasDropdown ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className={`${item.current
                                                        ? 'text-indigo-600 border-b-2 border-indigo-500'
                                                        : 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50'
                                                    } px-3 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 ease-in-out`}
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            {isDropdownOpen && (
                                                <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-indigo-100 z-50">
                                                    <div className="py-2">
                                                        {dropdownItems.map((dropItem) => (
                                                            <a
                                                                key={dropItem.name}
                                                                href={dropItem.href}
                                                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 transition-all duration-200 mx-2 rounded-lg"
                                                            >
                                                                {dropItem.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`${item.current
                                                    ? 'text-indigo-600 border-b-2 border-indigo-500'
                                                    : 'text-slate-700 hover:text-indigo-600 hover:bg-indigo-50'
                                                } px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out`}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Emergency Contact */}
                        <div className="flex items-center text-slate-600 text-sm bg-slate-50 px-3 py-2 rounded-lg">
                            <Phone className="h-4 w-4 mr-2 text-indigo-500" />
                            <span className="font-medium">+254115081710</span>
                        </div>

                        {/* Donate Button */}
                        <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <Heart className="h-4 w-4 mr-2" />
                            Donate Now
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-4 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-sm border-t border-indigo-100">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`${item.current
                                        ? 'text-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500'
                                        : 'text-slate-700 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50'
                                    } block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200`}
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile Actions */}
                        <div className="px-2 py-3 space-y-3">
                            <div className="flex items-center text-slate-600 text-sm bg-slate-50 px-3 py-2 rounded-lg">
                                <Phone className="h-4 w-4 mr-2 text-indigo-500" />
                                <span className="font-medium">+254115081710</span>
                            </div>
                            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center shadow-lg">
                                <Heart className="h-4 w-4 mr-2" />
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;