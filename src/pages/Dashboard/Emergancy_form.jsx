import { useState } from "react";
import sideBar from "./SliderBar";
import User_Nav from "./User_Nav";
import { FaMapMarkedAlt } from "react-icons/fa";

const emergancy_form = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  console.log("Emergancy Form Toggle : " + sidebarToggle);

  return (
    <div>
      {/* When toggle the nav bar this is not toggle . Need to fix it */}
      <div
        className={`${
          sidebarToggle ? "ml-0" : "ml-64"
        } w-full bg-red-200 absolute top-20 z-0`}
      >
        <form className="relative p-5 ">
          <h1 className="text-center text-base">
            <span className="text-4xl">Are you in a Emegancy?</span>
            <br /> Let us know we will with you
          </h1>
          <div className="grid gap-4 mb-6 md:grid-cols-2 p-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2 "
              ></input>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900 ">
                Location
              </label>
              <div class="relative">
                <input
                  type="search"
                  id="search"
                  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2 "
                  placeholder="Search"
                  required
                />
                <a
                  type="submit"
                  href="https://www.google.com/maps/"
                  class="cursor-pointer text-white absolute end-2 bottom-1 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg text-sm px-2 py-1 "
                >
                  <FaMapMarkedAlt className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="px-5 pb-5">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select the type of emergency
            </label>
            <select
              id="emergency_type"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
            >
              <option>Flood</option>
              <option>Tsunami</option>
              <option>Fire</option>
              <option>House Fire</option>
            </select>
          </div>

          <div className="grid gap-4 mb-6 md:grid-cols-2 p-5 items-center">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900 ">
                Name
              </label>
              <select
                id="No_of_people_effected"
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2 "
              >
                <option>Only me</option>
                <option>Two</option>
                <option>3-10</option>
                <option>10-20</option>
                <option>more than 20</option>
                <option>more than 100</option>
                <option>Not Sure, but many</option>
              </select>
            </div>

            <div className="flex justify-between items-center p-5">
              <div class="flex items-center ">
                <input
                  id="country-option-1"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  checked
                />
                <label
                  for="country-option-1"
                  class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Need medical support
                </label>
              </div>
              <div class="flex items-center ">
                <input
                  id="country-option-1"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  checked
                />
                <label
                  for="country-option-1"
                  class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Doesn't need medical support
                </label>
              </div>
            </div>
          </div>

          {/* https://flowbite.com/docs/components/forms/ - use this for the rest */}

          {/* Selection */}

          {/* Record void */}
          <div>
            <input className="bg-gray-800"></input>
          </div>

          {/* Select Images or videos */}
          <div>
            <input className="bg-gray-800"></input>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default emergancy_form;

// <div className="flex ">
//         <Slidebar />
//         <User_Nav />
//       </div>

//       <div>
//         <div className="fixed bg-red-200 w-full container">
//           <h1>Nav bar with profile image</h1>
//         </div>

//         {/* Form starts */}
//         <form className="relative ">
//           <h1>Are you in a Emegancy?. Let us know we will with you</h1>
//           <div>
//             <input className="bg-gray-200"></input>
//             <label>Name</label>
//           </div>

//           <div>
//             <input className="bg-gray-200"></input>
//             <label>Location</label>
//             {/* Icon to access the current location */}
//           </div>

//           <div>
//             <input className="bg-gray-200"></input>
//             <p> Select the type of emergency</p>
//           </div>

//           <div>
//             <input className="bg-gray-200"></input>
//             <p> Select the Number of people got effected</p>
//           </div>

//           {/* Selection */}
//           <div>
//             <p>need medical support</p>
//           </div>

//           {/* Record void */}
//           <div>
//             <input className="bg-gray-800"></input>
//           </div>

//           {/* Select Images or videos */}
//           <div>
//             <input className="bg-gray-800"></input>
//           </div>

//           <button>Submit</button>
//         </form>
//       </div>
