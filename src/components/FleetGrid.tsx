'use client';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CarCard } from './CarCard';
import { CheckCircle2, XCircle } from 'lucide-react';

import { ALL_CARS } from '@/lib/cars';

export default function FleetGrid() {
    const searchParams = useSearchParams();
    const location = searchParams.get('location');
    const pickup = searchParams.get('pickup');

    // In a real app, we would fetch availability based on these params
    const isSearchActive = !!(location || pickup);

    return (
        <div className="space-y-8">
            {isSearchActive && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-center"
                >
                    <p className="text-primary font-medium">
                        Showing availability for <span className="text-white font-bold">{location || 'selected location'}</span>
                    </p>
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ALL_CARS.map((car, index) => (
                    <motion.div
                        key={car.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="relative"
                    >
                        {/* Availability Badge Overlay */}
                        {isSearchActive && (
                            <div className={`absolute top-4 left-4 z-30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg ${car.available
                                ? 'bg-green-500/90 text-white backdrop-blur-sm'
                                : 'bg-red-500/90 text-white backdrop-blur-sm'
                                }`}>
                                {car.available ? (
                                    <><CheckCircle2 className="w-3.5 h-3.5" /> Available</>
                                ) : (
                                    <><XCircle className="w-3.5 h-3.5" /> Unavailable</>
                                )}
                            </div>
                        )}

                        {/* Dim unavailable cars if searching */}
                        <div className={`${isSearchActive && !car.available ? 'opacity-60 grayscale' : ''} transition-all duration-300`}>
                            <CarCard car={car} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
