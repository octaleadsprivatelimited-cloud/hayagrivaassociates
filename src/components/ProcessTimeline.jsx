import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function ProcessTimeline({ steps = [] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  const normalizedSteps = useMemo(
    () =>
      steps.map((step, index) => ({
        ...step,
        index,
        displayNumber: step.step || index + 1
      })),
    [steps]
  );

  if (!normalizedSteps.length) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="relative max-w-5xl mx-auto"
    >
      <div className="absolute inset-y-8 left-8 hidden lg:block">
        <div className="h-full w-px bg-gradient-to-b from-brand-primary/40 via-brand-primary/20 to-transparent"></div>
      </div>
      <div className="space-y-10">
        {normalizedSteps.map((step) => {
          const IconComponent = step.icon;
          const isLast = step.index === normalizedSteps.length - 1;

          return (
            <motion.div
              key={`${step.displayNumber}-${step.title}`}
              variants={itemVariants}
              className="relative flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10"
            >
              <div className="relative flex items-start lg:items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white text-2xl font-semibold flex items-center justify-center shadow-xl">
                    {step.displayNumber}
                  </div>
                  {!isLast && (
                    <div className="hidden lg:block absolute left-1/2 top-full -translate-x-1/2 w-px h-16 bg-gradient-to-b from-brand-primary/30 to-transparent"></div>
                  )}
                </div>
                <div className="lg:hidden relative flex-1">
                  {!isLast && (
                    <div className="absolute left-[31px] top-16 bottom-0 w-px bg-gradient-to-b from-brand-primary/25 to-transparent"></div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg transition-all hover:border-brand-primary/60 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start">
                    {IconComponent && (
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                        <IconComponent className="h-7 w-7" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}


