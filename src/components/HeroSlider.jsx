import {Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import { EffectFade, AutoPlay} from "swiper";
import Img1 from '../assets/images/heroSlider/1.jpg';
import Img2 from '../assets/images/heroSlider/2.jpg';
import Img3 from '../assets/images/heroSlider/3.jpg';
import { Autoplay, EffectFade } from "swiper/modules";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img1,
    btnText: 'See our rooms'
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img2,
    btnText: 'See our rooms'
  },
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Img3,
    btnText: 'See our rooms'
  }
]


const HeroSlider = () => {
    return (
      <>
        <Swiper
        modules={[EffectFade, Autoplay]}
        effect={'fade'}
        className="heroSlider h-[600px] lg:h-[860px]"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        >
          {slides?.map((slide,index)=>{
            //destructure slide
            const {title, bg, btnText} = slide;
            return (
              <>
               <SwiperSlide key={index} className="h-full w-full relative">
                <div className="z-20 text-white text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="uppercase font-condensed tracking-[6px] mb-5">Just Enjoy and relax</div>
                  <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[60px] mb-6">{title}</h1>
                  <button className="btn btn-lg btn-primary mx-auto">{btnText}</button>
                </div>
                <div className="absolute top-0 w-full h-full">
                  <img
                  className="object-cover h-full w-full"
                   src={bg} 
                   alt="slide_img"
                    />
                </div>
                {/* overlay */}
                <div className="absolute top-0 w-full h-full bg-black/70">

                </div>
               </SwiperSlide>
              </>
            )
          })
          }
        </Swiper>
      </>
    );
};

export default HeroSlider;