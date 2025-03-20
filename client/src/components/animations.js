export const getAnimationVariants = (delayStart = 0) => ({
  hidden: { opacity: 0, y: -20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delayStart + index * 0.3, duration: 0.5 },
  }),
});
