import React from "react";
import { useParams } from "react-router-dom";

const Results = () => {

    //destructure variable from url route
    const {varName} = useParams();

    return (
    <div>
        <h2>RESULTs</h2>
        <p>var from url: {varName}</p>
    </div>);
}
export default Results;