'use client';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Star } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-medium text-gray-300">Premium Car Rental Service</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Drive the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Exceptional</span>
                        </h1>

                        <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                            Experience the thrill of the open road with our meticulously curated fleet of premium vehicles.
                            Luxury, performance, and comfort, tailored to your journey.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="group">
                                View Fleet
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg">
                                How it Works
                            </Button>
                        </div>

                        <div className="mt-12 flex items-center gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-white">50+</h4>
                                <p className="text-sm text-gray-400">Premium Cars</p>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div>
                                <h4 className="text-3xl font-bold text-white">24/7</h4>
                                <p className="text-sm text-gray-400">Support</p>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div>
                                <h4 className="text-3xl font-bold text-white">100%</h4>
                                <p className="text-sm text-gray-400">Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-surface/50 backdrop-blur-sm shadow-2xl">
                            {/* Visual Placeholder for a premium car */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-900/20" />
                            <img
                                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
                                alt="Premium Car"
                                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
                                alt="Hero Car"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-surface border border-white/10 p-4 rounded-2xl shadow-xl z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">4.9/5</p>
                                    <p className="text-xs text-gray-400">Customer Rating</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
