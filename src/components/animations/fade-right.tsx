
"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimationFadeRightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const AnimationFadeRight = ({
  children, className, delay, duration, once, ...props
}: AnimationFadeRightProps) => {
  return !!children && (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: -50 }}
      transition={{
        delay,
        duration,
        ease: 'easeOut',
      }}
      viewport={{ once }}
      whileInView={{ opacity: 1, x: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};


export default AnimationFadeRight;
