import { useState } from "react";
import Card from "../components/UI/Card";
import "./EnterURL.css";

const EnterURL = (props) => {
    const [link, setLink] = useState("");
    const [selection, setSelection] = useState("");

    const linkChangeHandler = (event) => {
        setLink(event.target.value);
    };

    const selectChangeHandler = (event) => {
        setSelection(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.fetchShortenedURL({ link, selection });
        setLink("");
    };

    return (
        <Card>
            <h1>Link Shortener</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="link">Enter a link:</label>
                <input
                    value={link}
                    onChange={linkChangeHandler}
                    id="link"
                    placeholder="www.example.com"
                    autoFocus
                />
                <button type="submit" id="click-button">
                    Go !
                </button>
                <br />

                <div className="domains">
                    <label htmlFor="domains">Choose a domain:</label>
                    <select
                        name="domains"
                        id="domains"
                        onChange={selectChangeHandler}
                    >
                        <option value="shrtco.de">shrtco.de</option>
                        <option value="9qr.de">9qr.de</option>
                        <option value="shiny.link">shini.link</option>
                    </select>
                </div>
            </form>
            <p>A demo URL shortening tool for MindX people!</p>
        </Card>
    );
};
export default EnterURL;
