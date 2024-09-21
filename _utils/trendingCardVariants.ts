export const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: -50,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeIn"
      }
    })}