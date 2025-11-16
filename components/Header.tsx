
import React, { useState } from 'react';
import { Page } from '../types';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { LocationIcon } from './icons/LocationIcon';
import { SummaryPage } from './pages/SummaryPage';
import { PortfolioPage } from './pages/PortfolioPage';

import { SkillsPage } from './pages/SkillsPage';
import { LinksPage } from './pages/LinksPage';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { CloseIcon } from './icons/CloseIcon';
import { HomePage } from './pages/HomePage';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'links', label: 'Links' },
];

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (page: Page) => {
        setCurrentPage(page);
        setIsMenuOpen(false); // Close menu on navigation
    };

    return (
        <header className="flex flex-col h-screen">
            <div className="flex justify-between items-start mt-8 mb-8 sm:mb-12 px-12">
                <div id="availability-toggle" className="flex items-center space-x-1.5 cursor-pointer" title="Click to toggle status">
                    <span id="availability-light" className="w-2.5 h-2.5 rounded-full bg-green-500 transition-colors animate-pulse-green"></span>
                    <span id="availability-text" className="text-xs sm:text-sm text-gray-100">Open to work</span>
                </div>

                {/* Mobile Nav Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8">
                    {navItems.map((item) => (
                        <a 
                            key={item.id}
                            href="#" 
                            className={`text-3xl font-bold transition-colors ${currentPage === item.id ? 'text-accent' : 'text-white hover:text-accent'}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}

            <div className="flex-grow flex flex-col justify-center">
                {currentPage === 'home' && (
                     <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-0">
                        {/* Left Side: Name, Title, Contact */}
                        <div className="md:w-1/2 space-y-4 text-center md:text-left px-12">
                            <h1 className="text-5xl lg:text-7xl font-black text-white">Emmanuel Tay</h1>
                            <h2 className="text-3xl lg:text-4xl text-text-secondary">Multimedia Creative</h2>
                            
                            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                                <a href="mailto:emmanueltay233@gmail.com" className="flex items-center space-x-3 text-text-secondary justify-center md:justify-start hover:text-accent transition-colors">
                                    <MailIcon />
                                    <span>emmanueltay233@gmail.com</span>
                                </a>
                                <a href="tel:+233552392224" className="flex items-center space-x-3 text-text-secondary justify-center md:justify-start hover:text-accent transition-colors">
                                    <PhoneIcon />
                                    <span>+233 552-392-224</span>
                                </a>
                                <a href="https://www.linkedin.com/in/emmanuel-tay-3b6665362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-text-secondary justify-center md:justify-start hover:text-accent transition-colors">
                                    <LinkedinIcon />
                                    <span>linkedin.com/in/emmanuel-tay</span>
                                </a>
                                <div className="flex items-center space-x-3 text-text-secondary justify-center md:justify-start">
                                    <div className="animate-pulse-location">
                                        <LocationIcon />
                                    </div>
                                    <span>Ghana, Accra</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Side: Portrait/Silhouette */}
                        <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
                            <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden relative shadow-glow-home">
                                {/* Using placeholder to ensure something is visible */}
                                <img
                                    src="/SenaTay.png"
                                    alt="Portrait of Emmanuel Tay"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'summary' && <SummaryPage />}
                {currentPage === 'portfolio' && <PortfolioPage />}
                {currentPage === 'skills' && <SkillsPage />}
                {currentPage === 'links' && <LinksPage />}
            </div>

            {/* Desktop Navigation Bar */}
            <nav className="hidden md:flex justify-center w-full mt-auto">
                 <div className="nav-container glassmorphism rounded-full px-3 py-3 flex items-center justify-center space-x-1 sm:space-x-2 overflow-x-auto">
                    {navItems.map((item) => (
                        <a 
                            key={item.id}
                            href="#" 
                            className={`nav-link px-4 py-2 rounded-full cursor-pointer text-sm sm:text-base transition-all ${currentPage === item.id ? 'bg-white/20' : 'hover:bg-white/10'}`} 
                            data-page={item.id}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};