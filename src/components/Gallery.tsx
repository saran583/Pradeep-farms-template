import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../data/gallery';
import { X, Calendar, Tag } from 'lucide-react';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            className="relative group cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300" />
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <Tag className="h-4 w-4" />
                  <span className="text-sm">{item.category}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {selectedItem.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{selectedItem.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      <span className="text-sm">{selectedItem.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};