import Card from "../components/UI/Card";
import "./Result.css";
import { ERROR_CODE } from "../config";

const Result = (props) => {
    if (props.isLoading) {
        return <Card>Loading result...</Card>;
    } else if (props.error) {
        return <Card className="error">{ERROR_CODE[props.error]}</Card>;
    } else
        return (
            <Card className="resultURL">
                <h2>Here is your shortened link: </h2>
                <a
                    href={`https://www.${props.shortLink}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.shortLink}
                </a>
            </Card>
        );
};

export default Result;
