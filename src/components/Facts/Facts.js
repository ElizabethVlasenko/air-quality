import React from 'react';
import SlideFacts from './SlideFacts';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

SwiperCore.use([Navigation, Pagination]);

const Facts = ({title, slides}) =>{
    const factsSlides = slides.map((slide)=> <SwiperSlide  key={slide.id}>
        <SlideFacts item={slide}/>
        </SwiperSlide>)

    return (
        <section className="facts container" id="facts">
            <h2 className="facts-title">{title}</h2>
            <div className="swiper-button-prev"/>
            <Swiper
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }}
            pagination={{
                el: ".facts-pagination",
                clickable: true,
                renderBullet: function(index, className) {
                    return `<span class="facts-pagination-bullet ${className}"></span>`;
                }
            }}
            spaceBetween={10}
            slidesPerView={3}

            centeredSlides={true}
            breakpoints={{
                100: {
                    spaceBetween: 10, 
                    slidesPerView: 1,
                    centeredSlides: true,
                },
                768: {
                    spaceBetween: 20, 
                    slidesPerView: 2,
                    centeredSlides: true
                },
                1024: {
                    spaceBetween: 10, 
                    slidesPerView: 3,
                    centeredSlides: true,
                }

            }}
            
            >   
            
                {factsSlides}
            </Swiper>
            <div className="swiper-button-next"/>
            <div className="facts-pagination"/>
        </section>
    );
};

export default Facts;