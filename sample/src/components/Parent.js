// component name should start with capital letters

import { useState } from "react";
import Child from "./Child";



const Parent=()=>{

    const parentData='Sonu';
    const [childDataInParent, setChildDataInParent] = useState;

    const receiveDataFromChild = (data) => {
        console.log(data);
        setChildDataInParent(data);

    };


    return (
        <>
        <h1>Parent Component</h1>
        <p>Parent data in parent component: {parentData}</p>
        <p>Child data in parent component: {childDataInParent}</p>
        {/*<Child/>*/}
        <Child childToParent={receiveDataFromChild} parentToChild={parentData}/> {/* passing data from parent to child */}
        </>
    );
};

export default Parent;