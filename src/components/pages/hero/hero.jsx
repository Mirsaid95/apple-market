import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { data } from '../../data/data';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Hero = () => {
    return (
        <>
            <div className='hero'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">

                {data.slide.map((item) => (
                    <SwiperSlide key={item.id} className='mySlides pt-[20px] w-[100%] bg-cover bg-center h-[500px] '>
                        <img src={item.img} alt={item.id} className='w-[100%] h-[600px] ' />
                    </SwiperSlide>

                ))}


            </Swiper>
            </div>
        </>
    );
}