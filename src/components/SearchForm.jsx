import useInput from "../hooks/useInput";
import {useState} from "react";
import useDebounce from "../hooks/useDebounce";

export const SearchForm = () => {
    const [value, setValue] = useState('');
    const debouncedSearch = useDebounce(search, 500)

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(e => console.log(e))
    }

    const onChange = (e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChange} placeholder='Search...'/>
        </div>
    )
}