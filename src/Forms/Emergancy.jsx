import { FaMapMarkedAlt,FaMicrophone } from "react-icons/fa";
import { IoCaretBackSharp } from "react-icons/io5";
import BackButton from "../components/Common/BackButton";


const Emergancy = () => {
  return (
    <div>
      <div className="p-5">
        <BackButton />
      </div>
      <div
        className="
        px-5 md:px-10 py-5"
      >
        <form className="p-5 bg-blue-100 text-gray-900 font-semibold text-base">
          <h1 className="text-center font-bold ">
            <span className="text-2xl md:text-5xl ">
              Are you in a Emegancy?
            </span>
            <br /> Let us know we will with you
          </h1>
          <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
            <div>
              <label className="block mb-1 ">Name</label>
              <input
                type="text"
                id="name"
                required
                class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2 "
              ></input>
            </div>

            <div>
              <label className="block mb-1  ">Location</label>
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
            <label for="countries" class="block mb-2 ">
              Select the type of emergency
            </label>
            <select
              id="emergency_type"
              class="bg-gray-50 border border-gray-300text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                required
            >
              <option>Flood</option>
              <option>Tsunami</option>
              <option>Fire</option>
              <option>House Fire</option>
            </select>
          </div>

          <div className="grid gap-4 mb-6 md:grid-cols-2 p-5 items-center">
            <div>
              <label className="block mb-1 ">No of people effected</label>
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

            <div className="flex justify-between items-center  p-1 md:p-5">
              <div class="flex items-center ">
                <input
                  id="country-option-1"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                  checked
                />
                <label className="block ms-2 text-xs md:text-base ">
                  Need medical support
                </label>
              </div>
              <div class="flex items-center ">
                <input
                  id="country-option-1"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                  checked
                />
                <label className="block ms-2 text-xs md:text-base">
                  Doesn't need medical support
                </label>
              </div>
            </div>
          </div>

          {/* Selection */}

          {/* Record void */}
          <div className="px-5 pb-3">
            <label
              
              className="block mb-2 "
            >
              Voice Message
            </label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md ">
                <FaMicrophone className="w-5 h-5" />
              </span>
              <input
                type=""
                id=""
                class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-black focus:black block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                placeholder="voice message..."
              ></input>
            </div>
          </div>

          {/* Select Images or videos */}
          <div class="flex items-center justify-center w-full py-3 px-5">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 "
            >
              <div class="flex flex-col items-center justify-center py-3">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 ">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 ">select images or videos</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>

          <div className="py-3 px-5">
            <label for="message" class="block mb-2 ">
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black "
              placeholder="If you need any special thing to say..."
            ></textarea>
          </div>

          <div className="flex items-center justify-center mt-5 px-5">
            <button className="bg-primary py-2 px-10 w-full text-white text-bold text-xl rounded-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Emergancy;
