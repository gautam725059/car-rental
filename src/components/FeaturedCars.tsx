'use client';
import { motion } from 'framer-motion';
import { CarCard } from './CarCard';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

const FEATURED_CARS = [
    {
        id: '1',
        name: 'Tesla Model S Plaid',
        category: 'Electric Sport',
        price: 189,
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop', // Placeholder
        features: {
            passengers: 5,
            fuel: 'Electric',
            transmission: 'Auto',
        },
    },
    {
        id: '2',
        name: 'Porsche 911 GT3',
        category: 'Supercar',
        price: 350,
        image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop', // Placeholder
        features: {
            passengers: 2,
            fuel: 'Petrol',
            transmission: 'Auto',
        },
    },
    {
        id: '3',
        name: 'Range Rover SV',
        category: 'Luxury SUV',
        price: 250,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2670&auto=format&fit=crop', // Placeholder
        features: {
            passengers: 5,
            fuel: 'Hybrid',
            transmission: 'Auto',
        },
    },
];

export const FeaturedCars = () => {
    return (
        <section id="fleet" className="py-24 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-primary">Fleet</span></h2>
                        <p className="text-gray-400 max-w-lg">
                            Choose from our diverse collection of high-end vehicles designed for every occasion.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button variant="outline" className="group">
                            View All Cars
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURED_CARS.map((car, index) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CarCard car={car} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
