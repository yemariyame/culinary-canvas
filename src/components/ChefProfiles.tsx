import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const CHEFS = [
  {
    name: 'Marcus Valerius',
    role: 'Executive Chef',
    bio: 'With over 20 years of experience in Michelin-starred kitchens, Marcus brings a unique blend of classical French techniques and modern Mediterranean flair.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8caa4df3-a51c-4e8b-ba37-9a0aef5fca12/chef-1-3fd380d6-1772191510386.webp',
  },
  {
    name: 'Elena Rossi',
    role: 'Head Pastry Chef',
    bio: 'Elena is a master of sugar art and fine patisserie. Her creations are as beautiful as they are delicious, focusing on seasonal ingredients.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8caa4df3-a51c-4e8b-ba37-9a0aef5fca12/chef-2-c17fc971-1772191512384.webp',
  }
];

const ChefProfiles = () => {
  return (
    <section id="chefs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
          >
            Meet the Masters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 max-w-2xl mx-auto"
          >
            Our culinary team is dedicated to pushing the boundaries of taste and presentation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {CHEFS.map((chef, index) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8">
                <img 
                  src={chef.image} 
                  alt={chef.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-1">{chef.name}</h3>
              <p className="text-orange-600 font-medium mb-4">{chef.role}</p>
              <p className="text-stone-500 leading-relaxed italic">
                "{chef.bio}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefProfiles;