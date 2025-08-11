import { AsyncPaginate } from 'react-select-async-paginate';

export default function Search() {
    return (
        <AsyncPaginate
            placeholder="Search for a city..."
            debounceTimeout={600}
            value= {search}
        />
    );
}