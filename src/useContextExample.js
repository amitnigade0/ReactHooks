
import * as React from 'react';
import { useState, createContext, useContext } from "react";

const countContext = createContext();

export default function UseContextExample() {
    const [counter, setCounter] = useState(0);
    React.useEffect( () =>{

    },[counter])
    
    return (
        <countContext.Provider value={counter}>
                <button onClick={() => setCounter(counter + 1)}>Button</button>
                parent
            <ChildComponent/>
        </countContext.Provider>
    );
};

function ChildComponent() {
    
    return (
        <div>
            childComponent
            <DeepChildComponent/>
        </div>
    );
};


function DeepChildComponent() {
    const counter = useContext(countContext)
    return (
        <div>
            deepChildComponent - {counter}
        </div>
    );
};