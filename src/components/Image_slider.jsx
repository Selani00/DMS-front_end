import React from "react";
import image1 from "../assets/Slide_Bar/one.png";
import image2 from "../assets/Slide_Bar/two.png";
import image3 from "../assets/Slide_Bar/three.png";
import image4 from "../assets/Slide_Bar/four.png";
import { Carousel } from "flowbite-react";

const Image_slider = () => {
  return (
    <section className="px-4 py-4 max-w-screen-2xl mx-auto ">
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <div className="md:w-3/4 h-56  sm:h-64 md:h-80">
          <Carousel className="w-full h-full max-w-full max-h-full ">
            <img src={image1} alt="" className="object-cover" />
            <img src={image2} alt="" className="object-cover" />
            <img src={image3} alt="" className="object-cover" />
            <img src={image4} alt="" className="object-cover" />
          </Carousel>
        </div>

        <div className="md:w-1/4 mx-auto">
          <div className="ml-10 mt-5 flex flex-col  justify-start col-span-1">
            <div className="bg-secondary w-[260px] h-[260px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] rounded-full absolute mt-0">
              <div className="m-6 sm:m-2 text-center relative p-1">
                <div className="text-white font-extrabold text-4xl sm:text-lg md:text-3xl lg:text-4xl mb-4">
                  Mission
                </div>
                <div className="text-white font-semibold text-base sm:text-xs md:text-1xl lg:text-base items-end">
                  elpower individuals, organizations, and entire communities to
                  build resilience and respond effectively to disasters of all
                  scales.
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Big Circle */}
              <div className="bg-white w-[240px] h-[240px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px] rounded-full bottom-0 left-0 transform -translate-x-1/2 translate-y-1/3">
                {/* Small Circle */}
                <div className="bg-primary w-[220px] h-[220px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto">
                  <div className="m-6 md:m-2 sm:m-2 text-center p-1">
                    <div className="text-white font-extrabold text-4xl sm:text-lg md:text-3xl lg:text-4xl mb-4 sm:mb-2 md:mb-2">
                      Vision
                    </div>
                    <div className="text-white font-semibold text-base sm:text-xs md:text-1xl lg:text-base">
                      foster resilience and reduce vulnerabilities, ensuring a
                      safer and more secure future for all.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Image_slider;

{
  /* <div className="m-5 flex flex-col justify-center">

<div className='bg-secondary mb-4 h-14 w-14 mx-auto rounded-full '>
    <div className='bg-primary mb-4 h-12 w-12 mx-auto rounded-full -ml-8 '>hi</div>
    hi
</div>


</div> */
}

{
  /* <div className=" max-w-screen h-screen ">
                <Carousel>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />

                </Carousel>


            </div>
            <div>
                <div>
                    def ree
                </div>
            </div>


            <div className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#1E65A3" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,218.7C672,203,768,181,864,149.3C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <div
                class="mb-3 inline-flex w-full items-center rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800"
                role="alert">
                <span class="mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
                A simple warning alert - check it out!
            </div> */
}

{
  /* <div className='bg-lightblue '>
<div className='px-2 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>

    <Carousel className='w-full mx-auto'>
        <div className=" my-10 md:my-0 py-10 flex flex-col md:flex-row-reverse items-center justify-between gap-2">

            <div className=''>

                <p className=' text-black text-base mb-8 '>
                    Vision And Mission
                </p>


            </div>

            <div className='md:w-4/5 h-full items-center justify-center'>

                <>
                    <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={image1} alt="" className='w-full h-full'></img>

                        </div>
                    </div>
                    <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={image1} alt=""></img>

                        </div>
                    </div>

                </>

            </div>

        </div>




    </Carousel>
</div>


</div> */
}
