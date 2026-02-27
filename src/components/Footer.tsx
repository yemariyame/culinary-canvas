import React from 'react';
import { Utensils, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold font-serif">SavoryBloom</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Crafting unforgettable culinary journeys since 2010. We believe in the power of fresh ingredients and passionate cooking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-orange-500 transition-colors">Our Menu</a></li>
              <li><a href="#reservations" className="hover:text-orange-500 transition-colors">Book a Table</a></li>
              <li><a href="#events" className="hover:text-orange-500 transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400">
                <MapPin className="text-orange-600 flex-shrink-0" size={20} />
                <span>123 Culinary Ave, Foodie District,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Phone className="text-orange-600" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <Mail className="text-orange-600" size={20} />
                <span>hello@savorybloom.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-stone-400 mb-4">Subscribe for special offers and recipes.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-orange-600"
              />
              <button className="bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-80 bg-stone-800 rounded-3xl overflow-hidden mb-16 relative">
           <div className="absolute inset-0 flex items-center justify-center text-stone-500 flex-col">
              <MapPin size={48} className="mb-4" />
              <p>Interactive Map View</p>
              {/* In a real app, embed Google Maps here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.422199126435!2d-73.9875!3d40.7588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x51c33f21876a470!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, opacity: 0.6 }} 
                allowFullScreen={false} 
                loading="lazy" 
              />
           </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} SavoryBloom Restaurant Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;