import Back from "../components/Common/BackButton";
import image from "../assets/Volunteering/Volunteering.jpg";

const Volunteering = () => {
  return (
    <div>
      <div className="p-5">
        <Back />
      </div>

      <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
        <div className="text-start items-center text-black">
          <div className="px-5">
            <p className="text-md md:text-xl italic font-semibold">Help the people with us</p>
            <h1 className="text-2xl md:text-3xl  font-semibold">Need Your Heartful Help</h1>
          </div>
          <div>
            <img src={image} alt="" className="items-center justify-center p-1"/>
          </div>
        </div>

        <div className="bg-blue-100 p-5 rounded-lg text-black text-base">
          <div className="font-semibold text-primary text-center py-5">
            <h1 className="text-3xl md:text-4xl">Complete the Form</h1>
            <p className="text-sm md:text-base text-red-600">Fill Form and Beacame Volonteer</p>
          </div>

          <form className="p-1 md:p-5">
            <input 
              type="text"
              id="name"
              required
              placeholder="Enter your Name"
              class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 my-5"
            ></input>

            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 my-5"
              placeholder="Enter your phone number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />

            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 my-5"
              placeholder="Enter your Email"
              required
            />

            <input
              type="text"
              id="address"
              required
              placeholder="Enter Home Address"
              class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 my-5"
            />

            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black my-5"
              placeholder="How you can help us?"
            ></textarea>

            <div className="flex items-center justify-center mt-5 ">
              <button className="bg-primary py-2 px-10 w-full text-white font-semibold text-xl rounded-2xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
