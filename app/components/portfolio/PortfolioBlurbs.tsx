'use client';

import { useApp } from '@/app/hooks/useApp';
import { useInView } from 'react-intersection-observer';

interface PortfolioBlurbsProps {
  activeIndex: number;
  slides: any;
}
const PortfolioBlurbs = ({ activeIndex, slides }: PortfolioBlurbsProps) => {
  const { state } = useApp();
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <div
      ref={ref}
      className={`${inView ? 'slide-in-left' : 'slide-off-right'} mt-4`}
    >
      <p
        className={`${
          state.theme.id === 'theme1'
            ? 'text-cyan-600'
            : state.theme.id === ''
            ? 'text-cyan-400'
            : 'text-cyan-700'
        } text-cyan-400 text-lg mx-6`}
      >
        {activeIndex === slides.length
          ? 'Tech Stack'
          : slides[activeIndex].text}
      </p>
    </div>
  );
};

export default PortfolioBlurbs;
