'use client';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';
import { ALL_CARS } from '@/lib/cars';
import { CheckCircle, Calendar, MapPin, Fuel, Gauge, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BookingPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();

    const carId = params.id as string;
    const car = ALL_CARS.find(c => c.id === carId);

    // Form State initialized from URL params
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: searchParams.get('location') || '',
        pickupDate: searchParams.get('pickup') || '',
        dropoffDate: searchParams.get('dropoff') || '',
    });

    const [totalPrice, setTotalPrice] = useState(0);

    // Calculate price effect
    useEffect(() => {
        if (formData.pickupDate && formData.dropoffDate && car) {
            const start = new Date(formData.pickupDate);
            const end = new Date(formData.dropoffDate);
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 0) {
                setTotalPrice(diffDays * car.price);
            } else {
                setTotalPrice(car.price); // Min 1 day
            }
        }
    }, [formData.pickupDate, formData.dropoffDate, car]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (!car) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Car Not Found</h1>
                    <Link href="/fleet" className="text-primary hover:underline">Return to Fleet</Link>
                </div>
            </div>
        );
    }

    const handleConfirm = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Booking Request*%0A%0A*Car:* ${car.name}%0A*Price:* $${totalPrice}%0A*Dates:* ${formData.pickupDate} to ${formData.dropoffDate}%0A*Location:* ${formData.location}%0A%0A*Customer Details:*%0AName: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}`;

        // WhatsApp URL (using a dummy business number)
        const whatsappUrl = `https://wa.me/15551234567?text=${message}`;

        // Email URL
        const emailUrl = `mailto:reservations@luxeride.com?subject=Booking Request: ${car.name}&body=${message.replace(/%0A/g, '%0D%0A')}`;

        if (confirm("Would you like to send your booking request via WhatsApp?\n\nClick 'OK' for WhatsApp, or 'Cancel' to open your Email client.")) {
            window.open(whatsappUrl, '_blank');
        } else {
            window.open(emailUrl, '_blank');
        }

        // router.push('/'); 
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
                <Link href="/fleet" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Fleet
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Col: Car Summary */}
                    <div className="lg:col-span-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-surface rounded-3xl overflow-hidden border border-white/5 sticky top-24"
                        >
                            <div className="h-48 relative">
                                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                    {car.category}
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h2 className="text-2xl font-bold text-white">{car.name}</h2>

                                <div className="flex justify-between text-sm text-gray-400 border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {car.features.passengers} Seats</div>
                                    <div className="flex items-center gap-2"><Fuel className="w-4 h-4" /> {car.features.fuel}</div>
                                    <div className="flex items-center gap-2"><Gauge className="w-4 h-4" /> {car.features.transmission}</div>
                                </div>

                                <div className="flex justify-between items-center text-white">
                                    <span>Daily Rate</span>
                                    <span className="font-bold text-lg">${car.price}</span>
                                </div>

                                {totalPrice > 0 && (
                                    <div className="bg-primary/10 p-4 rounded-xl flex justify-between items-center text-primary border border-primary/20">
                                        <span className="font-semibold">Total Estimate</span>
                                        <span className="font-bold text-xl">${totalPrice}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Col: Booking Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-surface p-8 rounded-3xl border border-white/5"
                        >
                            <h1 className="text-3xl font-bold text-white mb-8">Confirm Your Booking</h1>

                            <form onSubmit={handleConfirm} className="space-y-8">
                                {/* Trip Details */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" /> Trip Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Pick-up Location</label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Pick-up Date</label>
                                                <input
                                                    type="date"
                                                    name="pickupDate"
                                                    value={formData.pickupDate}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none [color-scheme:dark]"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">Drop-off Date</label>
                                                <input
                                                    type="date"
                                                    name="dropoffDate"
                                                    value={formData.dropoffDate}
                                                    onChange={handleChange}
                                                    required
                                                    min={formData.pickupDate}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none [color-scheme:dark]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-white/5" />

                                {/* Personal Details */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary" /> Personal Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="Ram"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Doe"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="email@example.com"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="7369954206"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" size="lg" className="w-full text-lg">
                                        Confirm Booking
                                    </Button>
                                    <p className="text-center text-sm text-gray-500 mt-4">
                                        By clicking "Confirm Booking", you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
