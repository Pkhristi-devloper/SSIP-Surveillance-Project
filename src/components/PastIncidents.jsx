/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PastIncidents = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const cameras = {
    Gujarat: {
      Ahmedabad: [
        {
          id: 1,
          name: "Camera 101",
          eventDate: "2024-02-15",
          videoLink: "https://youtu.be/O_gv4_N_w3Y?si=j77JbMQDdl2iV7QS",
        },
        {
          id: 2,
          name: "Camera 102",
          eventDate: "2024-01-10",
          videoLink: "https://example.com/video2.mp4",
        },
      ],
      Surat: [
        {
          id: 3,
          name: "Camera 103",
          eventDate: "2023-12-05",
          videoLink: "https://example.com/video3.mp4",
        },
        {
          id: 4,
          name: "Camera 104",
          eventDate: "2024-03-02",
          videoLink: "https://example.com/video4.mp4",
        },
      ],
      Vadodara: [
        {
          id: 5,
          name: "Camera 105",
          eventDate: "2024-01-22",
          videoLink: "https://example.com/video5.mp4",
        },
        {
          id: 6,
          name: "Camera 106",
          eventDate: "2023-11-30",
          videoLink: "https://example.com/video6.mp4",
        },
      ],
    },
  };

  const filteredCameras = cameras[selectedState]?.[selectedCity] || [];

  const statesWithCities = {
    "Andhra Pradesh": [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Tirupati",
      "Kurnool",
      "Rajahmundry",
      "Kakinada",
      "Kadapa",
      "Anantapur",
    ],
    "Arunachal Pradesh": [
      "Itanagar",
      "Naharlagun",
      "Tawang",
      "Bomdila",
      "Ziro",
      "Pasighat",
      "Roing",
      "Tezu",
      "Seppa",
      "Changlang",
    ],
    Assam: [
      "Guwahati",
      "Dibrugarh",
      "Silchar",
      "Jorhat",
      "Tezpur",
      "Tinsukia",
      "Nagaon",
      "Karimganj",
      "Sivasagar",
      "Goalpara",
    ],
    Bihar: [
      "Patna",
      "Gaya",
      "Muzaffarpur",
      "Bhagalpur",
      "Darbhanga",
      "Arrah",
      "Begusarai",
      "Purnia",
      "Chhapra",
      "Bihar Sharif",
    ],
    Chhattisgarh: [
      "Raipur",
      "Bilaspur",
      "Durg",
      "Bhilai",
      "Korba",
      "Rajnandgaon",
      "Jagdalpur",
      "Ambikapur",
      "Raigarh",
      "Dhamtari",
    ],
    Goa: [
      "Panaji",
      "Margao",
      "Vasco da Gama",
      "Mapusa",
      "Ponda",
      "Bicholim",
      "Curchorem",
      "Canacona",
      "Sanquelim",
      "Sanguem",
    ],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Gandhinagar",
      "Anand",
      "Navsari",
      "Morbi",
    ],
    Haryana: [
      "Gurgaon",
      "Faridabad",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
      "Hisar",
      "Karnal",
      "Sonipat",
      "Bhiwani",
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Manali",
      "Dharamshala",
      "Solan",
      "Mandi",
      "Palampur",
      "Kullu",
      "Chamba",
      "Bilaspur",
      "Nahan",
    ],
    Jharkhand: [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro",
      "Deoghar",
      "Hazaribagh",
      "Giridih",
      "Ramgarh",
      "Phusro",
      "Medininagar",
    ],
    Karnataka: [
      "Bengaluru",
      "Mysore",
      "Mangalore",
      "Hubli",
      "Belgaum",
      "Davangere",
      "Tumkur",
      "Gulbarga",
      "Bijapur",
      "Shimoga",
    ],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Thrissur",
      "Alappuzha",
      "Palakkad",
      "Kollam",
      "Kannur",
      "Kottayam",
      "Malappuram",
    ],
    "Madhya Pradesh": [
      "Bhopal",
      "Indore",
      "Gwalior",
      "Jabalpur",
      "Ujjain",
      "Sagar",
      "Ratlam",
      "Satna",
      "Rewa",
      "Chhindwara",
    ],
    Maharashtra: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Aurangabad",
      "Thane",
      "Solapur",
      "Amravati",
      "Kolhapur",
      "Latur",
    ],
    Manipur: [
      "Imphal",
      "Thoubal",
      "Bishnupur",
      "Ukhrul",
      "Senapati",
      "Churachandpur",
      "Kakching",
      "Tamenglong",
      "Jiribam",
      "Noney",
    ],
    Meghalaya: [
      "Shillong",
      "Tura",
      "Jowai",
      "Nongstoin",
      "Baghmara",
      "Williamnagar",
      "Resubelpara",
      "Mairang",
      "Khliehriat",
      "Mawkyrwat",
    ],
    Mizoram: [
      "Aizawl",
      "Lunglei",
      "Champhai",
      "Serchhip",
      "Kolasib",
      "Lawngtlai",
      "Saiha",
      "Mamit",
      "North Vanlaiphai",
      "Bairabi",
    ],
    Nagaland: [
      "Kohima",
      "Dimapur",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
      "Phek",
      "Kiphire",
      "Mon",
      "Longleng",
    ],
    Odisha: [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Berhampur",
      "Sambalpur",
      "Balasore",
      "Puri",
      "Jeypore",
      "Bhadrak",
      "Baripada",
    ],
    Punjab: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Mohali",
      "Hoshiarpur",
      "Pathankot",
      "Moga",
      "Firozpur",
    ],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Kota",
      "Bikaner",
      "Ajmer",
      "Alwar",
      "Bhilwara",
      "Sikar",
      "Pali",
    ],
    Sikkim: [
      "Gangtok",
      "Namchi",
      "Gyalshing",
      "Mangan",
      "Ravangla",
      "Jorethang",
      "Singtam",
      "Soreng",
      "Chungthang",
      "Rongli",
    ],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Erode",
      "Tirunelveli",
      "Vellore",
      "Thoothukudi",
      "Dindigul",
    ],
    Telangana: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Khammam",
      "Karimnagar",
      "Ramagundam",
      "Mahbubnagar",
      "Adilabad",
      "Suryapet",
      "Miryalaguda",
    ],
    Tripura: [
      "Agartala",
      "Udaipur",
      "Dharmanagar",
      "Kailashahar",
      "Ambassa",
      "Khowai",
      "Belonia",
      "Sonamura",
      "Sabroom",
      "Jirania",
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Varanasi",
      "Agra",
      "Meerut",
      "Allahabad",
      "Ghaziabad",
      "Bareilly",
      "Aligarh",
      "Moradabad",
    ],
    Uttarakhand: [
      "Dehradun",
      "Haridwar",
      "Rishikesh",
      "Haldwani",
      "Nainital",
      "Kashipur",
      "Roorkee",
      "Rudrapur",
      "Pithoragarh",
      "Almora",
    ],
    "West Bengal": [
      "Kolkata",
      "Howrah",
      "Durgapur",
      "Asansol",
      "Siliguri",
      "Malda",
      "Kharagpur",
      "Haldia",
      "Bardhaman",
      "Medinipur",
    ],
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoPlay = (videoLink) => {
    setSelectedVideo(videoLink);
  };

  return (
    <div className="flex w-full h-screen text-white">
      <div className="left min-w-[300px] w-[50%] ">
        <h1 className="text-4xl font-bold text-center my-5">
          Previous Incidents
        </h1>
        {/* State Dropdown */}
        <div className=" mx-5 border-[1px] px-10 py-3 border-cyan-500 rounded-xl">
          <label className="text-xl" htmlFor="states">
            Choose a State:{" "}
          </label>
          <select
            className="ml-5 px-5 py-1 border-[1px] border-blue-950 active:border-blue-800 outline-blue-800"
            id="states"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option className="text-black" value="">
              --Select State--
            </option>
            {Object.keys(statesWithCities).map((state, index) => (
              <option className="text-black" key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <br />
        {/* City Dropdown (Only shows when a state is selected) */}
        {selectedState && (
          <div className=" mx-5 border-[1px] px-10 py-3 border-cyan-500 rounded-xl">
            <label className="text-xl" htmlFor="cities">
              {" "}
              Choose a City:{" "}
            </label>
            <select
              className="ml-5 px-5 py-1 border-[1px] border-blue-950 active:border-blue-800 outline-blue-800"
              id="cities"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option className="text-black" value="">
                --Select City--
              </option>
              {statesWithCities[selectedState].map((city, index) => (
                <option className="text-black" key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <h2 className="text-3xl text-center mt-10 font-semibold mb-5">Previous Incidents in {selectedCity}</h2>
          {filteredCameras.length > 0 ? (
            <ul>
              {filteredCameras.map((camera, index) => (
                <li className="border-2 flex justify-between px-2 py-3 items-center" key={index}>
                  <strong>{camera.name}</strong> <br />
                  <small>Incident Date: {camera.eventDate}</small> <br />
                  {" "}
                  <button onClick={() => handleVideoPlay(camera.videoLink)}>
                    Watch Video
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No past incidents found for this city.</p>
          )}
        </div>
      </div>
      <div className="right">
        {selectedVideo && (
          <video width="600" controls>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default PastIncidents;
