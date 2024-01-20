import { useState ,useEffect} from "react";
import Volunteer from "./Volunteer";
import "./about.css";
import Footer from "./Footer";
import {firestore} from "../../config/firebase";
import { collection, getDocs } from 'firebase/firestore';

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
  const [volunteers, setVolunteers] = useState([]);

  function handleClick() {
    if (volunteersCount === 4) {
      setVolunteersCount(volunteerDetails.length + 1);
      return;
    }
    setVolunteersCount(4);
  }

  async function getVolunteerDocuments() {
    try {
      // Reference to the "volunteer" collection
      const volunteerCollectionRef = collection(firestore, 'volunteers');
  
      // Get the documents in the collection
      const querySnapshot = await getDocs(volunteerCollectionRef);
  
      // Initialize an empty array to store the documents
      const volunteerList = [];
  
      // Loop through the documents and push them to the array
      querySnapshot.forEach((doc) => {
        volunteerList.push(doc.data());
      });

      console.log(volunteerList);
  
      // Return the list of volunteer documents
      return volunteerList;
    } catch (error) {
      console.error('Error getting volunteer documents:', error);
      throw error;
    }
  }

  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const volunteerList = await getVolunteerDocuments();
        setVolunteers(volunteerList);
      } catch (error) {
        console.error("Error fetching volunteer details:", error);
      }
    }

    fetchVolunteers();
  }, []);

  return (
    <>
      <div className=" w-full flex flex-col items-center gap-12 py-12 bg-white" style={{backgroundColor:'#bac7e0'}}>
        <div>
          <h1 className=" text-center text-3xl font-bold mb-1">ABOUT US</h1>
          <p className=" text-center text-2xl text-blue-600">
            Meet Our Volunteers
          </p>
        </div>
        <div className=" flex flex-col gap-6 w-10/12 sm:w-1/2 md:grid md:grid-cols-4 md:gap-5 xl:gap-10 md:w-3/4 md:justify-between">
          {volunteers.slice(0, volunteersCount).map((item, index) => (
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