import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

function NewDesign() {
  return (
    <div className="newdesign-main">
      <div className="hero-swiper">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{
            el: ".swiper_pagination",
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div>
              <img src="/hero-img.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/hero-img.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/hero-img.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/hero-img.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="/hero-img.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div style={{ backgroundImage: "url(/bg.png)" }}>
        <div
          className={`swiper_pagination d-flex justify-content-center gap-3 py-4 z-1`}
        ></div>
        <h1 style={{ fontSize: "69px" }} className="text-center p-0 m-0">
          Looking for best content across the world?
        </h1>
      </div>
    </div>
  );
}

export default NewDesign;
