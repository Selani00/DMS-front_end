import React from 'react'

const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' >
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>

                    <button class="relative m-5">
                        <span class="relative inline-flex items-center justify-center h-50 w-50">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-40 w-40 bg-red-500 items-center justify-center">
                                <span class="text-white font-bold text-lg text-center">Report Emergency</span>
                            </span>
                        </span>
                    </button>


                    <div className='md:w-2/5 mx-auto'>
                        <h2 className='text-4xl text-black font-semibold mb-4 md:w-4/5'>About</h2>
                        <p className='md:w-3/4 text-sm text-grey-800 mb-8'>
                                At the heart of Your Disaster Management System is a dedicated team of experts in 
                                disaster management, technology, and community engagement. We believe in the power of 
                                proactive planning, swift response, and the strength of collaborative efforts to minimize the 
                                impact of disasters on lives and infrastructure.
                        </p>
                        

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
