'use client';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import FleetGrid from '@/components/FleetGrid';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

export default function FleetPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Our Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Fleet</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Choose from our meticulously curated collection of the world's finest vehicles.
                    </motion.p>
                </div>
            </section>

            {/* Grid with Search Logic */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <Suspense fallback={<div className="text-white text-center">Loading fleet...</div>}>
                        <FleetGrid />
                    </Suspense>
                </div>
            </section>

            <Footer />
        </main>
    );
}
