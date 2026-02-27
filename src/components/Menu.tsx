import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Info, ChevronRight } from 'lucide-react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Drinks';
  image: string;
  dietary: string[];
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Classic Ribeye Steak",
    description: "28-day aged ribeye, roasted bone marrow, red wine jus, and truffle mash.",
    price: "$42",
    category: "Main Course",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8caa4df3-a51c-4e8b-ba37-9a0aef5fca12/steak-dish-a886dcd5-1772191509959.webp",
    dietary: ["Gluten-free"]
  },
  {
    id: 2,
    name: "Mediterranean Garden Salad",
    description: "Heirloom tomatoes, cucumber, Kalamata olives, whipped feta, and lemon oregano vinaigrette.",
    price: "$18",
    category: "Appetizers",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8caa4df3-a51c-4e8b-ba37-9a0aef5fca12/salad-dish-bcfa8220-1772191504253.webp",
    dietary: ["Vegan", "Gluten-free"]
  },
  {
    id: 3,
    name: "Artisan Carbonara",
    description: "Handmade spaghetti, guanciale, pecorino romano, and farm-fresh egg yolk.",
    price: "$26",
    category: "Main Course",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8caa4df3-a51c-4e8b-ba37-9a0aef5fca12/pasta-dish-ee45de08-1772191515702.webp",
    dietary: []
  },
  {
    id: 4,
    name: "Molten Lava Cake",
    description: "70% dark chocolate, Madagascar vanilla bean gelato, and raspberry coulis.",
    price: "$14",
    category: "Desserts",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/8caa4df3-a51c-4e8b-ba37-9a0aef5fca12/dessert-dish-7d7b09e5-1772191504473.webp",
    dietary: ["Vegetarian"]
  },
  {
    id: 5,
    name: "Truffle Arancini",
    description: "Crispy risotto balls with wild mushrooms and truffle aioli.",
    price: "$16",
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800",
    dietary: ["Vegetarian"]
  },
  {
    id: 6,
    name: "Roasted Salmon",
    description: "Atlantic salmon, asparagus spears, and citrus hollandaise.",
    price: "$34",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
    dietary: ["Gluten-free"]
  }
];

const CATEGORIES = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Drinks'];
const DIETARY_FILTERS = ['Vegan', 'Gluten-free', 'Vegetarian'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  const filteredItems = MENU_ITEMS.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const filterMatch = activeFilters.length === 0 || activeFilters.every(f => item.dietary.includes(f));
    return categoryMatch && filterMatch;
  });

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
          >
            Culinary Masterpieces
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-orange-600 mx-auto mb-8"
          />
        </div>

        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-orange-600 text-white shadow-lg' 
                    : 'bg-white text-stone-600 hover:bg-orange-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {DIETARY_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  activeFilters.includes(filter)
                    ? 'border-orange-600 bg-orange-50 text-orange-600'
                    : 'border-stone-200 text-stone-500 hover:border-orange-300'
                }`}
              >
                <Leaf size={14} />
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-stone-900">
                    {item.price}
                  </div>
                  {item.dietary.length > 0 && (
                    <div className="absolute bottom-4 left-4 flex gap-1">
                      {item.dietary.map(d => (
                        <span key={d} className="bg-orange-600 text-white p-1.5 rounded-full" title={d}>
                          <Leaf size={12} />
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="text-orange-600 font-semibold text-sm hover:text-orange-700 flex items-center gap-1 transition-colors">
                    Order Now <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Info className="mx-auto text-stone-300 mb-4" size={48} />
            <p className="text-stone-500">No dishes found matching your selection.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;