import React, {useDeferredValue, useMemo, useState} from 'react';
import {defaultItems} from "./defaultItems";

const DeferredValue = () => {
    const [value, setValue] = useState('')
    const [items, setItems] = useState(defaultItems)
    const deferredValue = useDeferredValue(value)

    const filteredItems = useMemo(() => {
        console.log("defer:", deferredValue)
        return items.filter(item => item.title.toLowerCase().includes(deferredValue))
    }, [deferredValue])

    const onChangeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={value} onChange={onChangeValue} placeholder="Write..."/>
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

export default DeferredValue;