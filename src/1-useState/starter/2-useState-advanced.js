import React, {useState} from "react";

const Index = () => {
    const initialObj = {
        firstName: "Sai",
        lastName: "Krishna"
    };
    const [name, setName] = useState(initialObj);
    const changeFirstName = () => {
        setName({
            ...name,
            firstName: "Sai Krishna"
        });
    };
    const changeLastName = () => {
        setName({
            ...name,
            lastName: "Paramkusam"
        });
    }


return (
    <div>
        <h1>My first name is {name.firstName} </h1>
        <button onClick={changeFirstName}>Change firstName</button>
        <h1>My last name is {name.lastName}</h1>
        <button onClick={changeLastName}>Change lastName</button>
    </div>
);
};

export default Index;