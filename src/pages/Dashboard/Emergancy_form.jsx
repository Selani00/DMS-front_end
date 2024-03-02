import Slidebar from "./Slidebar";

const emergancy_form = () => {
  return (
    <div className="flex ">
      <Slidebar />
      <div>
        <div>
          <h1>Nav bar with profile image</h1>
        </div>

        {/* Form starts */}
        <form>
            <h1>Are you in a Emegancy?. Let us know we will with you</h1>
          <div>
            <input className="bg-gray-200"></input>
            <label>Name</label>
          </div>

          <div>
            <input className="bg-gray-200"></input>
            <label>Location</label>
            {/* Icon to access the current location */}
          </div>

          <div>
          <input className="bg-gray-200"></input>
            <p> Select the type of emergency</p>
          </div>

          <div>

          <input className="bg-gray-200"></input>
            <p> Select the Number of people got effected</p>
          </div>

          {/* Selection */}
          <div>
            <p>need medical support</p>
          </div>

          {/* Record void */}
          <div>
            <input className="bg-gray-800"></input>
          </div>

          {/* Select Images or videos */}
          <div>
            <input className="bg-gray-800"></input>
          </div>

          <button>
                Submit
          </button>


        </form>
      </div>
    </div>
  );
};

export default emergancy_form;
