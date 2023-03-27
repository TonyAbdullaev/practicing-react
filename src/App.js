import BatchingExample from "./examples/BatchingExample";
import {useState} from "react";
import useInput from "./hooks/useInput";
import {Inputs} from "./components/Inputs";
import Hover from "./components/Hover";
import {List} from "./components/List";
import {SearchForm} from "./components/SearchForm";
import {RequestForm} from "./components/RequestForm";
// import Concurrent from "./examples/Concurrent";
// import DeferredValue from "./examples/DeferredValue";

function App() {



    return (
        <div className="App">
            {/*<BatchingExample />*/}
            {/*<Inputs />*/}
            {/*<Concurrent />*/}
            {/*<DeferredValue />*/}
            {/*<Hover />*/}
            {/*<List />*/}
            {/*<SearchForm />*/}
            <RequestForm />
        </div>
    );
}

export default App;
