import React from 'react'
import image1 from '../assets/Slide_Bar/one.png'
import image2 from '../assets/Slide_Bar/two.png'
import image3 from '../assets/Slide_Bar/three.png'
import image4 from '../assets/Slide_Bar/four.png'
import { Carousel } from 'flowbite-react'

const Image_slider = () => {
    const slides = [
        image1, image2, image3, image4
    ];
    return (
        <section className='gird gap-8 md:grid-cols-2 md:items-center'>
            <div className=" w-screen h-screen ">
                <Carousel>
                    {slides.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className='w-full rounded-lg' />
                        </div>
                    ))}

                </Carousel>


            </div>
            <div>
                <div>
                    def ree
                </div>
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
            </div>
        </section>

    )
}

export default Image_slider


{/* <div className="m-5 flex flex-col justify-center">

<div className='bg-secondary mb-4 h-14 w-14 mx-auto rounded-full '>
    <div className='bg-primary mb-4 h-12 w-12 mx-auto rounded-full -ml-8 '>hi</div>
    hi
</div>


</div> */}




{/* <div className='bg-lightblue '>
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


</div> */}