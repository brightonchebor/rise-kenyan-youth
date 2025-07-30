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
        <nav className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img src={logo} alt="logo" className="w-18 h-18 object-contain"/>
                        </div>
                        <div className="ml-3">
                            <h1 className="text-xl font-bold text-gray-900">Rise Kenyan Youth</h1>
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
                                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                                        : 'text-gray-700 hover:text-blue-600'
                                                    } px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200`}
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>

                                            {/* Dropdown Menu */}
                                            {isDropdownOpen && (
                                                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                                                    <div className="py-1">
                                                        {dropdownItems.map((dropItem) => (
                                                            <a
                                                                key={dropItem.name}
                                                                href={dropItem.href}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
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
                                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                                    : 'text-gray-700 hover:text-blue-600'
                                                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
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
                        <div className="flex items-center text-gray-600 text-sm">
                            <Phone className="h-4 w-4 mr-1" />
                            <span>+254115081710</span>
                        </div>

                        {/* Donate Button */}
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
                            <Heart className="h-4 w-4 mr-2" />
                            Donate Now
                        </button>

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
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
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`${item.current
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    } block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200`}
                            >
                                {item.name}
                            </a>
                        ))}

                        {/* Mobile Actions */}
                        <div className="px-3 py-2 space-y-2">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
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

export default Navbar

