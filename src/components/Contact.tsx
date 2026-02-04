'use client';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get in <span className="text-primary">Touch</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Ready to experience the ultimate drive? Contact us today to reserve your vehicle or ask any questions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-surface p-8 rounded-3xl border border-white/5 space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Phone</h4>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                    <p className="text-gray-400">+1 (555) 987-6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email</h4>
                                    <p className="text-gray-400">reservations@luxeride.com</p>
                                    <p className="text-gray-400">support@luxeride.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Location</h4>
                                    <p className="text-gray-400">123 Luxury Lane, Beverly Hills</p>
                                    <p className="text-gray-400">CA 90210, United States</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary to-purple-600 p-8 rounded-3xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-xl font-bold mb-2">Ride in Style</h3>
                            <p className="opacity-90 mb-6">Join our exclusive membership for special rates and priority booking.</p>
                            <Button variant="secondary" size="sm">Join Membership</Button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-8 md:p-10 rounded-3xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                    placeholder="I'm interested in renting the Tesla Model S..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Send Message
                                <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
