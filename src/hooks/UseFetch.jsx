import { useState, useEffect } from "react";
import { api_url } from "../utils/api";

const useFetch = (url, options = {}, lang = "ar") => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api_url}/${url}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept-Language": lang,
                        "Lang": lang,
                        "ngrok-skip-browser-warning": "true",
                        ...options.headers,
                    },
                    ...options,
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result = await response.json();

                if (result.data) {
                    setData(result.data);
                } else {
                    throw new Error("No data found");
                }
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, lang]);

    return { data, loading, error };
};

export default useFetch;
