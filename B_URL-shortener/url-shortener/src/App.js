import { useState } from "react";
import "./App.css";
import EnterURL from "./components/EnterURL";
import Result from "./components/Result";
import Card from "./components/UI/Card";
import { API_URL } from "./config";

function App() {
    const [shortLink, setShortLink] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchShortenedURL({ link, selection }) {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(API_URL + link);
            const data = await response.json();

            if (data.ok) {
                switch (selection) {
                    case "shrtco.de":
                        setShortLink(data.result.short_link);
                        break;
                    case "9qr.de":
                        setShortLink(data.result.short_link2);
                        break;
                    case "shiny.link":
                        setShortLink(data.result.short_link3);
                        break;
                    default:
                        setShortLink(data.result.short_link);
                        break;
                }
            } else setError(data.error_code);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <EnterURL fetchShortenedURL={fetchShortenedURL}></EnterURL>
            {!isLoading && !error && !shortLink ? (
                <Card>Shortened URL will appear here!</Card>
            ) : (
                <Result
                    error={error}
                    shortLink={shortLink}
                    isLoading={isLoading}
                ></Result>
            )}
        </>
    );
}

export default App;
