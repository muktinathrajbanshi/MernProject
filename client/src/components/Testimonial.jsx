import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


export function Testimonial() {
  return (
    <section className="section section-testimonial">
      <div className="container">
        <h2 className="common-heading">Happy Client Works</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },   // for mobile
          780: { slidesPerView: 2 }  // tablet & desktop
        }}
        className="mySwiper container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="swiper-client-msg">
            <p>
               "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
            </p>
          </div>
          <div className="swiper-client-data grid grid-two-column">
            <figure>
              <img src="images/natalie portman.avif" alt="client review" />
            </figure>
            <div className="client-data-details">
              <p>natalie portman</p>
              <p>entrepreneur</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="swiper-client-msg">
            <p>
              "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
            </p>
          </div>
          <div className="swiper-client-data grid grid-two-column">
            <figure>
              <img src="images/tom cruise.avif" alt="client review" />
            </figure>
            <div className="client-data-details">
              <p>tom cruise</p>
              <p>entrepreneur</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="swiper-client-msg">
              <p>
                "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img src="images/hero.avif" alt="client review" />
              </figure>
              <div className="client-data-details">
                <p>muktinath rajbanshi</p>
                <p>entrepruner</p>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="swiper-client-msg">
              <p>
                 "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img src="images/emma stone.avif" alt="client review" />
              </figure>
              <div className="client-data-details">
                <p>emma stone</p>
                <p>entrepruner</p>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img src="images/paulwalker.avif" alt="client review" />
              </figure>
              <div className="client-data-details">
                <p>paul walker</p>
                <p>entrepruner</p>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                 "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img src="images/chris.avif" alt="client review" />
              </figure>
              <div className="client-data-details">
                <p>chris hemsworth</p>
                <p>entrepruner</p>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img src="images/angelina julie.avif" alt="client review" />
              </figure>
              <div className="client-data-details">
                <p>angelina jolie</p>
                <p>entrepruner</p>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img src="images/jennifer lawrence.avif" alt="client review" />
              </figure>
              <div className="client-data-details">
                <p>jennifer lawrence</p>
                <p>entrepruner</p>
              </div>
            </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                "I’m extremely impressed with the website they built for my
                company. It’s clean, functional, and user-friendly. Their team
                delivered exactly what we needed—on time and with great
                communication."
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img src="images/kate winslet.webp" alt="client review" />
              </figure>
              <div className="client-data-details">
                <p>kate winslet</p>
                <p>entrepruner</p>
              </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
}