import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { spreadable } from '../sx';

interface RotatorProps {
  delay: number;
  items: Array<[ReactNode, ReactNode]>;
  sx?: SxProps;
}

const motionProps: MotionProps = {
  initial: { translateX: 100, opacity: 0 },
  animate: { translateX: 0, opacity: 1 },
  exit: { translateX: -100, opacity: 0 },
  transition: { type: 'spring', duration: 0.8 },
};

export const Rotator = ({ items, delay, sx }: RotatorProps) => {
  const [index, setIndex] = useState(0);
  const hasRotated = useRef(false);
  const item = items[index];
  const prevItem = items[index - 1] ?? items.at(-1);
  const nextItem = items[index + 1] ?? items[0];
  const subtitleProps: MotionProps = {
    animate: motionProps.animate,
    transition: motionProps.transition,
  };

  subtitleProps.exit =
    nextItem[1] === item[1] ? { opacity: 1 } : motionProps.exit;

  if (prevItem[1] !== item[1]) {
    subtitleProps.initial = hasRotated.current ? motionProps.initial : false;
  }

  useEffect(() => {
    const id = setInterval(() => {
      hasRotated.current = true;
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, delay);
    return () => clearInterval(id);
  }, [delay, items.length]);

  return (
    <Box sx={[{ position: 'relative' }, ...spreadable(sx)]}>
      <AnimatePresence>
        <motion.span
          key={item[0] as string}
          {...motionProps}
          initial={hasRotated.current ? motionProps.initial : false}
          style={{ position: 'absolute' }}
        >
          {item[0]}
        </motion.span>
      </AnimatePresence>
      <br />
      <AnimatePresence>
        <motion.span
          key={item[1] as string}
          {...subtitleProps}
          style={{ position: 'absolute' }}
        >
          {item[1]}
        </motion.span>
      </AnimatePresence>
       <Box sx={{ opacity: 0 }}>{items[0][0]}</Box>
    </Box>
  );
};
