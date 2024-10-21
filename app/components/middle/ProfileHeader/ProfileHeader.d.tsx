export const blurAnimation = {
  initial: { filter: "blur(0.3em) grayscale(100%)", opacity: 0.3 },
  whileTap: {
    filter: "blur(0px) grayscale(0%)",
    opacity: 1,
    transition: { duration: 0.1 },
  },
  transition: { duration: 0.5, delay: 1.3 },
};
