import React, { useState } from 'react'
import image1 from '../assets/Slide_Bar/one.png'
import image2 from '../assets/Slide_Bar/two.png'
import image3 from '../assets/Slide_Bar/three.png'
import image4 from '../assets/Slide_Bar/four.png'
import image_bar1 from '../assets/B-image_bar.png'
import image_bar2 from '../assets/W-image_bar.png'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const image_bar = () => {
    const slides = [
        { src: image1, alt: '' },
        { src: image2, alt: '' },
        { src: image3, alt: '' },
        { src: image4, alt: '' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const newIndex = (currentIndex + 1) % slides.length;
    //         setCurrentIndex(newIndex);
    //     }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    //     return () => clearInterval(interval); // Clear interval on component unmount
    // }, [currentIndex, slides.length]);

    return (
        <section className='grid grid-cols-4 '>
            <div className='max-w-[1200px] h-[460px]  m-0 relative group col-span-3' >
                <div style={{ backgroundImage: `url(${slides[currentIndex].src})` }} className='w-full h-full  bg-center bg-cover duration-500 px-0'>

                </div>

                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-20 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>


            {/*Vision mission*/}

            <div className="ml-10 mt-5 flex flex-col  justify-start col-span-1">

                <div className="bg-secondary w-[270px] sm:w-[135px] md:w-[200px] lg:w-[270px] h-[270px] sm:h-[135] md:h-[200px] lg:h-[270px] rounded-full absolute mt-0">
                    <div className='m-6 text-center relative'>
                        <div className='text-white font-extrabold text-4xl sm:text-2xl md:text-3xl lg:text-4xl mb-4'>Mision</div>
                        <div className='text-white font-semibold text-base sm:text-xs md:text-1xl lg:text-base'>elpower individuals, organizations, and entire communities to build resilience and respond effectively to disasters of all scales.</div>
                    </div>
                </div>

                <div className="relative">
                    {/* Big Circle */}
                    <div className="bg-white w-[250px] h-[250px] rounded-full bottom-0 left-0 transform -translate-x-1/2 translate-y-1/3">
                        {/* Small Circle */}
                        <div className="bg-primary w-[210px] h-[210px] rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto">
                            <div className='m-6 text-center'>
                                <div className='text-white font-extrabold text-4xl mb-4'>Vision</div>
                                <div className='text-white font-semibold text-base'>foster resilience and reduce vulnerabilities, ensuring a safer and more secure future for all.</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='w-screen h=[50px]'>
                <img src={image_bar1} alt="" className=''  />
            </div>







        </section>



    )
}

export default image_bar

