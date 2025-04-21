import { cn } from "../../../utils/utils";
import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
    <div className="text-center mt-24">
        <h3 className="text-3xl font-semibold ">TECHNOLOGY INDEX</h3>
        <h2 className="text-5xl font-bold text-blue-950">Where Trust Meets <span className="text-[#ff9908]">Purpose</span></h2>
        </div>
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-14 px-36", className)}>    
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-slate-500/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
    </>
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0a243a] border border-transparent dark:border-white/[0.5] group-hover:border-slate-100 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold text-2xl tracking-wide mt-4 text-center", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    <div
      className={cn("mt-8 text-zinc-100 tracking-wide leading-relaxed text-base", className)}>
      {children}
    </div>
  );
};
