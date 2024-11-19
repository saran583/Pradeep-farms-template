import React from 'react';
import { TimelineEvent } from './TimelineEvent';
import { Milestone } from '../types';
import { motion } from 'framer-motion';

interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-white/50 rounded-2xl backdrop-blur-lg" />
      <div className="relative space-y-12 py-8 px-4">
        {milestones.map((milestone, index) => (
          <TimelineEvent
            key={milestone.year}
            milestone={milestone}
            index={index}
            isLast={index === milestones.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
};