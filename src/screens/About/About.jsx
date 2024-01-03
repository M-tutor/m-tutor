import { useState } from "react";
import Volunteer from "./Volunteer";
import "./about.css";
import Footer from "./Footer";

const volunteerDetails = [
  {
    name: "John doe",
    position:
      "Computer Science & Engineering undergraduate at university of Moratuwa",
  },
  {
    name: "John doe",
    position:
      "Computer Science & Engineering undergraduate at university of Moratuwa",
  },
  {
    name: "John doe",
    position:
      "Computer Science & Engineering undergraduate at university of Moratuwa",
  },
  {
    name: "John doe",
    position:
      "Computer Science & Engineering undergraduate at university of Moratuwa",
  },
  {
    name: "John doe",
    position:
      "Computer Science & Engineering undergraduate at university of Moratuwa",
  },
  {
    name: "John doe",
    position:
      "Computer Science & Engineering undergraduate at university of Moratuwa",
  },
];

function About() {
  const [volunteersCount, setVolunteersCount] = useState(4);

  function handleClick() {
    if (volunteersCount === 4) {
      setVolunteersCount(volunteerDetails.length + 1);
      return;
    }
    setVolunteersCount(4);
  }

  return (
    <>
      <div className=" w-full flex flex-col items-center gap-12 py-12 bg-white">
        <div>
          <h1 className=" text-center text-3xl font-bold mb-1">ABOUT US</h1>
          <p className=" text-center text-2xl text-blue-600">
            Meet Our Volunteers
          </p>
        </div>
        <div className=" flex flex-col gap-6 w-10/12 sm:w-1/2 md:grid md:grid-cols-4 md:gap-5 xl:gap-10 md:w-3/4 md:justify-between">
          {volunteerDetails.slice(0, volunteersCount).map((item, index) => (
            <Volunteer key={index} details={item} index={index} />
          ))}
        </div>
        <button
          className=" rounded-full view-more-btn bg-gray-100 px-6 py-3 text-blue-800 transition-all ease-in-out delay-75 duration-300 hover:bg-gray-300"
          onClick={handleClick}
        >
          {volunteersCount === 4 ? "View More" : "View Less"}
        </button>
      </div>
      <Footer />
    </>
  );
}

export default About;
