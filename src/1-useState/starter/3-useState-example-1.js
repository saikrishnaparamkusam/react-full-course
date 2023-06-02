import React, {useState} from "react"

const Index = () => {
    const [showData, setShowData] = useState(false);
    const handleChange = () => {
        setShowData(!showData)
    }
    return (
        <div>
            <button onClick={handleChange}>{showData?"hide":"show"}</button>
            {showData && (
            <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Esse laboriosam quae amet ab inventore?
                Saepe ut veniam sunt voluptates dolorem. Lorem
                ipsum dolor, sit amet consectetur adipisicing
                elit. Aut a exercitationem sed qui excepturi
                voluptatibus repudiandae dolores laborum ipsum
                numquam.
            </div>
            )}
        </div>

    );
};
export default Index;