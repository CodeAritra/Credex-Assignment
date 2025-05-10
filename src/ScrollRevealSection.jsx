/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; 

const ScrollRevealCard = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-gray-50 rounded shadow dark:bg-gray-900"
      initial={{  x: 40 }}
      animate={isInView ? {  x: 100 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2, 
        ease: "easeOut",
        repeat:Infinity
      }}
    >
      {children}
    </motion.div>
  );
};


export default function ScrollRevealSection({ items, renderItem }) {
  return (
    <div
      className={`grid ${
        items.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
      } gap-6 overflow-hidden`} 
    >
     {items.map((item, i) => (
  <ScrollRevealCard key={i} index={i}>
    {renderItem(item, i)}
  </ScrollRevealCard>
))}
    </div>
  );
}
