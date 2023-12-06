import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import PortfolioStackSlide from './PortfolioStackSlide';
import { portfolioSlides as slides } from '@/app/data/portfolioSlides';
import { useState } from 'react';
import { useApp } from '@/app/hooks/useApp';
import { useInView } from 'react-intersection-observer';
import PortfolioHeader from './PortfolioHeader';
import PortfolioBlurbs from './PortfolioBlurbs';

const Portfolio = () => {
  const { state } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);
  const options = { threshold: 0 };
  const { ref, inView } = useInView(options);
  return (
    <section
      id="portfolio"
      className={`p-8 pt-20 h-screen ${
        state.theme === '' ? 'bg-gradient-to-b' : ''
      } from-transparent via-cyan-950 to-transparent w-full text-center relative`}
    >
      <PortfolioHeader />
      <div
        ref={ref}
        className={`${inView ? 'slide-in-right' : 'slide-off-left'} `}
      >
        <Swiper
          spaceBetween={0}
          modules={[Pagination]}
          slidesPerView={1}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          className="border-2 border-neutral-500 rounded-3xl text-white w-11/12 bg-zinc-900 shadow-lg shadow-black my-swiper-container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative flex flex-col">
              <div
                style={{
                  backgroundImage: slide.href,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                  height: '600px',
                }}
                className="rounded-3xl"
              ></div>
              <div className="flex flex-col absolute bottom- w-full bg-gradient-to-t from-black to-neutral-900 h-12 -bottom-1">
                <div className="w-full rounded-b-2xl border-t border-neutral-600 "></div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide key={5} className="relative">
            <PortfolioStackSlide />
          </SwiperSlide>
        </Swiper>
      </div>
      <PortfolioBlurbs activeIndex={activeIndex} slides={slides} />
    </section>
  );
};

export default Portfolio;
