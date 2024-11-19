import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, isReversed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group mb-16 w-[95%] mx-auto"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-300" />
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isReversed ? 'md:grid-flow-dense' : ''}`}>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>
          <div className="h-[400px] md:h-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};