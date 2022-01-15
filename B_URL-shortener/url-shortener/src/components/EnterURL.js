import Card from "../components/UI/Card";
import "./EnterURL.css";

const EnterURL = (props) => {
    return (
        <Card>
            <h1>Link Shortener</h1>
            <label for="link">Enter a link: </label>
            <input id="link" placeholder="www.example.com" />
            <button id="click-button">Go !</button>
            <br />
            <label for="domains">Short domain: </label>

            <p>A demo URL shortening tool for MindX people!</p>
        </Card>
    );
};
export default EnterURL;
