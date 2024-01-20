function Volunteer({ details, index }) {
    return (
      <div
        className={`relative overflow-hidden md:w-full bg-blue-600 rounded-2xl aspect volunteer-${
          index + 1
        }`}
      >
        <div className=" w-full h-1/3 absolute bottom-0 bg-gradient-to-t from-gray-900 text-white flex flex-col items-center justify-evenly text-center p-2">
          <h5 className=" text-xl ">{details.name}</h5>
          <h6 className=" font-extralight text-xs">{details.position}</h6>
        </div>
      </div>
    );
  }
  
  export default Volunteer;