import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState(null);
    
    const handleChange = (newValue) => {
        setSearch(newValue)
    }


    return (
        <AsyncPaginate
            placeholder="Search for a city..."
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
        />
    );
}