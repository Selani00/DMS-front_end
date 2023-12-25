import React from 'react'

const LanguageBar = () => {
    return (
        <div class="bg-primary py-2 px-6 shadow-md z-10 flex justify-content-center align-items-center">
            <div class="flex flex-row items-center right-1 bg-grey rounded-full">
                <button class="px-2 py-1 items-center  rounded-full  text-sm font-medium text-black  focus:bg-black focus:text-white focus:outline-none"
                >
                    <span class="text-md">සිංහල</span>
                    
                </button>

                <button class="px-2 py-1  items-center  rounded-full  text-sm font-medium text-black  focus:bg-black focus:text-white focus:outline-none "
                >
                    <span class="text-md">English</span>
                    
                </button>
                <button class="px-2 py-1 items-center  rounded-full  text-sm font-medium text-black  focus:bg-black focus:text-white focus:outline-none "
                >
                    <span class="text-md">தமிழ்</span>
                    
                </button>
            </div>
            <div className='ml-auto text-white font-bold'><h3>Call center 1717</h3></div>

        </div>
    )
}

export default LanguageBar
