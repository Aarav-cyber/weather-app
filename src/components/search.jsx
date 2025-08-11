import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { Url, Options } from "./api.js";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleChange = (newValue) => {
    setSearch(newValue);
    onSearchChange(newValue);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${Url}?q=${inputValue}`, Options);
      const result = await response.json();
      return {
        options: result.data.map((city) => ({
          label: `${city.name}, ${city.country}`,
          value: city.id,
        })),
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
