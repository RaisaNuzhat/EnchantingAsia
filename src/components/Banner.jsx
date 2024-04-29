/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/kaptai-lake-2493134_1280.jpg'
import img2 from '../assets/sundarban-8477700_1280.jpg'
import img3 from '../assets/penang-5230946_1280.jpg'
import img4 from '../assets/phi-phi-islands-2785741_1280.jpg'
import img5 from '../assets/camron.jpg'
const Banner = () => {
    return (
        <div className='container mx-auto flex justify-center my-10 items-center'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '  src={img1} alt="Slide 1" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>Discover the Charm of Southeast Asia</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Dive into a world of cultural wonders, breathtaking landscapes, and culinary delights across vibrant destinations
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={img2} alt="Slide 2" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Indulge in Southeast Asia's Delights"</h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Immerse yourself in a tapestry of culture, nature, and flavors as you explore enchanting spots 
                            </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={img3} alt="Slide 3" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Experience the Magic of Southeast Asia
                        </h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Dive into a world of cultural wonders, breathtaking landscapes, and culinary delights across vibrant destinations in Southeast Asia, <br />
                        where every corner holds a new adventure waiting to be discovered.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3'   src={img4} alt="Slide 4" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Uncover the Wonders of Southeast Asia
                        </h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Journey through the cultural melting pot of Southeast Asia, where vibrant cities, ancient ruins,  <br /> 
                        and natural wonders come together to create a tapestry of experiences that will leave you spellbound.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-center items-center my-4 container'>
                    <img className='w-1/3 '   src={img5} alt="Slide 4" />
                    <div className="slide-content">
                        <h3 className='my-3 lg:font-semibold sm:font-medium text-center lg:text-2xl md:text-2xl text-xl text-[#233142]'>
                        Embrace the Spirit of Southeast Asia
                            </h3>
                        <p className='text-center text-[16px] my-6 text-[ #455d7a]'>
                        Delve into the rich heritage and captivating beauty of Southeast Asia, where the warmth of the people, the richness of the culture,  <br /> 
                        and the diversity of the landscapes combine to create an unforgettable journey.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;