import { Navbar } from "@/components/Navbar";
import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { BookingSection } from "@/components/BookingSection";
import { FeaturedCars } from "@/components/FeaturedCars";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <BookingSection />
      <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center text-white">Loading featured cars...</div>}>
        <FeaturedCars />
      </Suspense>

      {/* Simple Why Choose Us Section */}
      <section className="py-24 bg-surface border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Why Choose <span className="text-primary">LuxeRide</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Premium Selection</h3>
              <p className="text-gray-400">Access to the world&apos;s most exclusive vehicles, maintained to perfection.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">24/7 Concierge</h3>
              <p className="text-gray-400">Dedicated support team available around the clock to assist you.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Flexible Booking</h3>
              <p className="text-gray-400">Easy booking process with transparent pricing and no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}
