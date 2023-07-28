import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ReusableAnimation = ({ children, threshold = 0.2, delay=0.25 }) => {
  const ref = React.useRef(null);
  const animation = useAnimation();

  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.5, delay:delay }}
    >
      {children}
    </motion.div>
  );
};

export default ReusableAnimation;
