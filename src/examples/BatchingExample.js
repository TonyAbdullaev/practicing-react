import React, {useState} from 'react';

const BatchingExample = () => {
    const [state, setState] = useState(0)
    const [value, setValue] = useState(0)

    const update = () => {
        setTimeout(() => {
            setValue(prevValue => prevValue + 1)
            setState(prevState => prevState + 1)
        }, 1000)
    }

    return (
        <div>
            <h2>Value = {value}</h2>
            <h2>State = {state}</h2>
            <button onClick={update}>UPDATE</button>
        </div>
    );
};

export default BatchingExample;