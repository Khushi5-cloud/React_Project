const Child=(props)=>{

    //const parentDataInChild='';
    // taking data from parent 
    const parentDataInChild=props.parentToChild;
    const childData='Monu';

    const sendDataToParent = () => {
        console.log(childData);
        props.childToParent(childData);
    };


    return (
        <>
        <h1>Child Component</h1>
        <p>Parent data in child component: {parentDataInChild}</p>
        <p>Child data in parent component: {childData}</p>
        <button onClick={sendDataToParent} >Pass Data to Parent</button>
        </>
    );
};

export default Child;