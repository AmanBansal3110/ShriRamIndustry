import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const useAnimationCycle = (duration, pauseDuration) => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrame;
    let lastTime = null;
    let elapsedTime = 0;

    const animate = (time) => {
      if (lastTime === null) {
        lastTime = time;
      }
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isPaused) {
        elapsedTime += deltaTime;
        if (elapsedTime >= duration) {
          setIsPaused(true);
          elapsedTime = 0;
          setTimeout(() => {
            setProgress(0);
            setIsPaused(false);
          }, pauseDuration);
        } else {
          setProgress(elapsedTime / duration);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration, pauseDuration, isPaused]);

  return progress;
};

const CheckoutButton = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const progress = useAnimationCycle(3000, 1000);  // 3 seconds animation, 1 second pause

  const xInput = [0, 300];
  const background = useTransform(x, xInput, [
    "linear-gradient(90deg, #ec4899 0%, #ec4899 0%, #000 0%, #000 100%)",
    "linear-gradient(90deg, #ec4899 0%, #ec4899 100%, #000 100%, #000 100%)",
  ]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 250) {
      setIsComplete(true);
      console.log("Checkout initiated!");
    } else {
      x.set(0);
    }
    setIsDragging(false);
  };

  return (
    <motion.div
      className="w-full h-12 bg-black rounded-full relative overflow-hidden cursor-pointer"
      style={{ background }}
    >
      {!isDragging && (
        <motion.div
          className="absolute inset-0 bg-pink-500"
          style={{ x: `${progress * 100}%` }}
        />
      )}
      <motion.div
        className="absolute inset-0 flex items-center justify-start pl-2"
        drag="x"
        dragConstraints={{ left: 0, right: 300 }}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{ x }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white font-semibold text-sm">
          {isComplete ? "Checking out..." : "Swipe to right for checkout"}
        </span>
      </div>
    </motion.div>
  );
};

export default CheckoutButton;
