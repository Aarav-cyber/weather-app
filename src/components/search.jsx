import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { Url, Options } from "./api.js";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleChange = (newValue) => {
    setSearch(newValue);
    console.log('Selected city data:', newValue); // Add this line
    console.log('Label:', newValue.label);
    console.log('Value:', newValue.value);
    if (onSearchChange) onSearchChange(newValue);
  };

  // const handleChange = (newValue) => {
  //   setSearch(newValue);
  //   onSearchChange(newValue);
  // };


  const loadOptions = async (inputValue) => {
    if (!inputValue) return { options: [] };

    try {
      const response = await fetch(`${Url}?namePrefix=${inputValue}`, Options);

      if (response.status === 429) {
        throw new Error('Too many requests. Please wait a moment and try again.');
      }

      const result = await response.json();
      console.log('API response:', result);

      return {
        options: result.data.map((city) => ({
          label: `${city.name}, ${city.countryCode}`,
          value: `${city.latitude} ${city.longitude}`,
        }))
      };
    } catch (error) {
      console.error(error);
      return { options: [] };
    }
  };


  return (
    <AsyncPaginate
      placeholder="Search for a city..."
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}
