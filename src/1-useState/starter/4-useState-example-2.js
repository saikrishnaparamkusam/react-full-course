import React, {useState} from "react";

const Index = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const changeFirstName = (e) => {
    //     setFirstName(e.target.value);
    // }
    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    // const changePassword = (e) => {
    //     setPassword(e.target.value);

    //}
    const handleInputChange = (e, name) => {
        console.log(e.target.value, name);
        if (name === "firstName"){
            setFirstName(e.target.value);
        }else if(name === "email"){
            setEmail(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let userObj = {
            firstName: firstName,
            email: email,
            password: password
        };
        console.log(userObj);
    }
    
    return <div>
        <form onSubmit={handleSubmit}>
            <div className="formcontent">
                <input type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={firstName}
                    onChange={(e)=>handleInputChange(e,"firstName")}
                />
            </div>
            <div className="formcontent">
                <input type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email ID"
                    value={email}
                    onChange={(e)=>handleInputChange(e,"email")}
                />
            </div>
            <div className="formcontent">
                <input type="password"
                    name="Enter your name"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>handleInputChange(e,"password")}
                />
                <div className="formbutton">
                <button type="submit">Submit</button>
                </div>
                
            </div>
        </form>
    </div>
}

export default Index;
