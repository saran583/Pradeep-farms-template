import React from 'react';
import { motion } from 'framer-motion';
import { Milestone } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface TimelineEventProps {
  milestone: Milestone;
  index: number;
  isLast: boolean;
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({ milestone, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative flex items-center gap-8 group"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[2.45rem] top-[2.5rem] h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full" />
      )}

      {/* Event content */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200" />
            <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">
                  {milestone.year}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        whileHover={{ x: 5 }}
        className="flex-1"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-200" />
          <div className="relative rounded-xl bg-white p-6 shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {milestone.title}
            </h3>
            <p className="text-gray-600">{milestone.description}</p>
            {milestone.achievements && (
              <div className="mt-6 space-y-3">
                {milestone.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + ((i + 1) * 0.1) }}
                    className="flex items-center space-x-3 text-gray-700 group/item"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="flex-1">{achievement}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover/item:opacity-100 transform group-hover/item:translate-x-1 transition-all duration-200 text-blue-500" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};