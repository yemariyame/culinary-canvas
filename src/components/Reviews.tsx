import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    role: 'Food Blogger',
    text: 'The Ribeye was cooked to absolute perfection. The ambiance and service are unmatched in the city.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'David Chen',
    role: 'Local Resident',
    text: 'A true gem! The attention to detail in every dish is remarkable. Highly recommend the pasta carbonara.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Emily Thompson',
    role: 'Event Planner',
    text: 'Hosted a corporate event here and everything was flawless. The staff went above and beyond.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
          >
            What Our Guests Say
          </motion.h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="text-orange-500 fill-orange-500" size={20} />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-stone-50 border border-stone-100 relative group"
            >
              <Quote className="absolute top-6 right-6 text-stone-200 group-hover:text-orange-200 transition-colors" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-stone-600 mb-8 italic relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-stone-900">{review.name}</h4>
                  <p className="text-xs text-stone-400 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;