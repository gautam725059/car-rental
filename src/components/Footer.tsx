import Link from 'next/link';
import { Car, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="p-2 bg-primary rounded-xl">
                                <Car className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-white">LuxeRide</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium car rental service for those who demand excellence. Experience the thrill of the drive.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white text-gray-400 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 LuxeRide. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
