import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Users, Music, Utensils } from 'lucide-react';
import { toast } from 'sonner';

const EventBooking = () => {
  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Event Inquiry Received!", {
      description: "Our events coordinator will contact you within 24 hours.",
    });
  };

  return (
    <section id="events" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8caa4df3-a51c-4e8b-ba37-9a0aef5fca12/event-space-5ca00189-1772191513207.webp"
              alt="Event Space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-white text-3xl font-serif font-bold mb-4">Exclusive Private Events</h3>
              <p className="text-white/80 mb-6">Host your most memorable moments in our elegant event spaces. Perfect for weddings, corporate galas, and private celebrations.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
                  <Users size={16} /> <span>Up to 150 guests</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
                  <Music size={16} /> <span>Sound System</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm">
                  <Utensils size={16} /> <span>Custom Catering</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100">
            <div className="flex items-center gap-3 mb-6">
              <PartyPopper className="text-orange-600" size={32} />
              <h2 className="text-3xl font-serif font-bold text-stone-900">Event Inquiry</h2>
            </div>
            
            <form onSubmit={handleEventSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Other Celebration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Expected Guests</label>
                  <input type="number" placeholder="e.g. 50" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Your Contact</label>
                <input type="email" placeholder="email@address.com" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Brief Description</label>
                <textarea rows={4} placeholder="Tell us about your event vision..." className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-all" />
              </div>

              <button className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-stone-800 transition-all transform hover:scale-[1.02] shadow-lg">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventBooking;