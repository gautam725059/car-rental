'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Search } from 'lucide-react';
import { Button } from './Button';

export const BookingSection = () => {
    const router = useRouter();
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (location) params.set('location', location);
        if (pickupDate) params.set('pickup', pickupDate);
        if (returnDate) params.set('dropoff', returnDate);

        router.push(`/fleet?${params.toString()}`);
    };

    return (
        <section className="relative z-20 -mt-20 pb-20 container mx-auto px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-surface/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto"
            >
                <h2 className="text-2xl font-bold text-white mb-6">Book Your Ride</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                            <MapPin className="w-4 h-4 text-primary" />
                            Pick-up Location
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="City, Airport, or Address"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                            <Calendar className="w-4 h-4 text-primary" />
                            Pick-up Date
                        </label>
                        <input
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all [color-scheme:dark]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                            <Calendar className="w-4 h-4 text-primary" />
                            Return Date
                        </label>
                        <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all [color-scheme:dark]"
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-[50px]">
                        <Search className="mr-2 w-4 h-4" />
                        Find Vehicle
                    </Button>
                </form>
            </motion.div>
        </section>
    );
};
