'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Fuel, Users, Gauge } from 'lucide-react';

interface CarProps {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    features: {
        passengers: number;
        fuel: string;
        transmission: string;
    };
}

export const CarCard = ({ car }: { car: CarProps }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleRentClick = () => {
        // Current params
        const params = new URLSearchParams(searchParams.toString());
        router.push(`/book/${car.id}?${params.toString()}`);
    };

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors shadow-xl"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-60" />
                {/* Placeholder for image - in real app use Next/Image with valid src */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                    {/* If we had real images, <Image ... /> would go here */}
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20">
                    {car.category}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{car.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mt-3">
                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4 text-primary" />
                                <span>{car.features.passengers}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Fuel className="w-4 h-4 text-primary" />
                                <span>{car.features.fuel}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Gauge className="w-4 h-4 text-primary" />
                                <span>{car.features.transmission}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                    <div>
                        <span className="text-2xl font-bold text-white">${car.price}</span>
                        <span className="text-gray-400 text-sm">/day</span>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                        onClick={handleRentClick}
                    >
                        Rent Now
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
