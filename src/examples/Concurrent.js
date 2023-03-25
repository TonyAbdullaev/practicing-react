import React, {useMemo, useState, useTransition} from 'react';
import {defaultItems} from "./defaultItems";

const Concurrent = () => {
    const [value, setValue] = useState('')
    const [filteredValue, setFilteredValue] = useState('')
    const [items, setItems] = useState(defaultItems)
    const [isPending, startTransition] = useTransition()

    const filteredItems = useMemo(() => {
        return items.filter(item => item.title.toLowerCase().includes(filteredValue))
    }, [filteredValue])

    const onChangeValue = (event) => {
        setValue(event.target.value);
        startTransition(() => {
            setFilteredValue(event.target.value)
        })
    }

    return (
        <div>
            <input type="text" value={value} placeholder="Search..." onChange={onChangeValue}/>
            {isPending && <h2>Loading...</h2>}
            <div>
                {
                    filteredItems.map(item => (
                        <div key={item.id}>
                            <div>id = {item.id}</div>
                            <div>title = {item.title}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Concurrent;