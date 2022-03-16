import React, {useState} from "react";
import { useHistory } from "react-router-dom";
const Form = (props) => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const sendSurvey = (e) => {
        e.preventDefault();

        history.pushState('/');
    }
    return (
    <div>
        <form onSubmit={sendSurvey}>
            <label htmlFor="name">Your Name: </label>
            <input type="text" name="name" id="name" />
            <label htmlFor="comment">Comment: </label>
            <input type="text" name="comment" id="comment" />
            <button>Submit Survey</button>
        </form>
    </div>);
};

export default Form;
