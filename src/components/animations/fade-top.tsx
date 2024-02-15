
"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimationFadeTopProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const AnimationFadeTop = ({
  children, className, delay, duration, once, ...props
}: AnimationFadeTopProps) => {
  return !!children && (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 50 }}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
      viewport={{ once }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};


export default AnimationFadeTop;
