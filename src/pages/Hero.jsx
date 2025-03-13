/* eslint-disable react/prop-types */
import { useState } from "react";

const incidentsData = {
  "Water Leakage": {
    Gujarat: {
      Ahmedabad: [
        {
          id: 1,
          name: "Leakage at Kalupur",
          eventDate: "2025-02-15",
          photo:
            "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/leakage.jpg",
        },
      ],
    },
  },
  "Drainage Water": {
    Gujarat: {
      Ahmedabad: [
        {
          id: 1,
          name: "Leakage at Kalupur",
          eventDate: "2025-02-15",
          photo:
            "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/drainage1.webp",
        },
      ],
    },
  },
  "Road Damage": {
    Gujarat: {
      Ahmedabad: [
        {
          id: 1,
          name: "Leakage at Kalupur",
          eventDate: "2025-02-15",
          photo:
            "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/damage1.jpg",
        },
      ],
    },
  },
  "Illegal Hoarding": {
    Gujarat: {
      Ahmedabad: [
        {
          id: 1,
          name: "Leakage at Kalupur",
          eventDate: "2025-02-15",
          photo:
            "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/hoarding.jpg",
        },
      ],
    },
  },
};

const IncidentSection = ({ category }) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const states = Object.keys(incidentsData[category] || {});
  const cities = selectedState
    ? Object.keys(incidentsData[category][selectedState] || {})
    : [];
  const incidents =
    incidentsData[category][selectedState]?.[selectedCity] || [];
  const hasIncident = incidents.length > 0;

  return (
    <div className="w-[50%] min-w-[300px] h-auto p-6 rounded-lg shadow-xl transition-all duration-300 border-2 border-gray-500 hover:border-blue-400 hover:shadow-2xl bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-white text-center uppercase tracking-wide">
        {category}
      </h2>
      <select
        value={selectedState}
        onChange={(e) => {
          setSelectedState(e.target.value);
          setSelectedCity("");
        }}
        className="w-full p-3 text-black bg-white rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">--Select State--</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
      {selectedState && (
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full p-3 mt-3 text-black bg-white rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">--Select City--</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
      <div className="mt-5">
        {hasIncident
          ? incidents.map((incident, index) => (
              <div
                key={index}
                className="border p-4 bg-gray-700 rounded-lg mt-3 shadow-md hover:shadow-xl transition duration-300"
              >
                <p className="font-bold text-white">{incident.name}</p>
                <p className="text-gray-300">{incident.eventDate}</p>
                <img
                  src={incident.photo}
                  alt="Incident"
                  className=" object-cover mt-3 w-full h-[35vh] object-center rounded-lg border border-gray-500"
                />
              </div>
            ))
          : selectedState &&
            selectedCity && (
              <p className="text-gray-400 text-center">
                Work is already completed.
              </p>
            )}
      </div>
    </div>
  );
};

const IncidentReports = () => {
  return (
    <div className="w-full p-12 bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white text-center mb-8 uppercase">
        Recent Works
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {[
          "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/damage2.jpg",
          "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/hoarding.jpg",
          "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/drainage1.webp",
          "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/damage1.jpg",
          "https://raw.githubusercontent.com/Pkhristi-devloper/SSIP-Surveillance-Project/main/photo/leakage.jpg",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Recent Work"
            className="w-36 h-36 rounded-lg shadow-lg border border-gray-500 hover:border-blue-400 hover:shadow-2xl transition object-cover"
          />
        ))}
      </div>
      <div className="flex flex-col h-fit shrink md:flex-row justify-center gap-5 w-full max-w-8xl">
        <div className="h-fit flex max-w-1/2 flex-col justify-center md:flex-row gap-5">
          {Object.keys(incidentsData)
            .slice(0, 2)
            .map((category, index) => (
              <div className="h-fit" key={index}>
                <IncidentSection className="h-fit" category={category} />
              </div>
            ))}
        </div>
        <div className="flex max-w-1/2 h-fit flex-col justify-center md:flex-row gap-5">
          {Object.keys(incidentsData)
            .slice(2, 4)
            .map((category, index) => (
              <div className="h-fit" key={index}>
                <IncidentSection className="h-fit" category={category} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IncidentReports;
