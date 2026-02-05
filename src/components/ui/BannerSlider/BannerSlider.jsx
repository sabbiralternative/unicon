import useBannerImage from "../../../hooks/useBannerImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const BannerSlider = () => {
  const { bannerImage } = useBannerImage();
  return (
    <>
      {bannerImage?.banner?.length > 0 && (
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            className="w-full px-[6px] rounded-md"
            style={{
              aspectRatio: "2.00561 / 1",
              maxHeight: "350px",
            }}
          >
            <div className="w-full  h-full z-10  flex flex-row">
              {bannerImage?.banner?.map((image, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="w-full h-full swiper-slide">
                      <img
                        className="rounded-[10px]"
                        // className="min-w-full min-h-full bg-bg_Primary md:h-full bg-[null] absolute top-0 left-0 transition-all ease-in-out duration-500 transform -translate-x-full z-0 translate-x-0 z-10"
                        src={image}
                        alt=""
                        draggable="false"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </div>
        </Swiper>
      )}
    </>
  );
};

export default BannerSlider;
