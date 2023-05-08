import React, { useState, useEffect } from "react";
import Navbar from "../component/navbar/Navbar";
import Card from "../component/card/Card";
import Footer from "../component/footer/Footer";
import FilterPanel from "../component/filter/FilterPanel";
import { useState as _useState } from "../context/State";

const Home = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const { properties, filterPanel, selectedLocations, selectedGuests } =
    _useState();

  useEffect(() => {
    if (selectedLocations && selectedGuests >= 0) {
      const [city, country] = selectedLocations.split(",");
      const newFilteredProperties = properties.filter((property) => {
        return (
          property.city === city.trim() &&
          property.country === country.trim() &&
          property.maxGuests >= selectedGuests
        );
      });

      setFilteredProperties(newFilteredProperties);
    } else {
      setFilteredProperties(properties);
    }
  }, [properties, selectedLocations, selectedGuests]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto md:container md:mx-auto">
        <div className="flex justify-between w-[95%] mx-auto mb-[24px]">
          <p className="text-2xl font-bold">
            Stays in {selectedLocations ? selectedLocations : "windbnb"}
          </p>
          <p className="text-sm">{filteredProperties.length} stays</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((data, i) => (
            <Card
              key={i}
              img={data.photo}
              superhost={data.superHost}
              title={data.title}
              type={data.type}
              beds={data.beds}
              rating={data.rating}
            />
          ))}
        </div>
      </div>

      {filterPanel && <FilterPanel />}
      <Footer />
    </div>
  );
};

export default Home;
