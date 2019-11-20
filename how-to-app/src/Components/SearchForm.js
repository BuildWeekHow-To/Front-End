import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";



export default function SearchForm() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get("https://build-week-how-to.herokuapp.com//api/howtos")
            .then(response => {
                const howtos = response.data.results.filter(howto => howto.name.toLowerCase().includes(query.toLowerCase())
                );
                setData(howtos);
            })
    }, [query])

    const handleChange = event => {
        setQuery(event.target.value);
    }
    return (
        <section className="search-form">
            <form>

                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    value={query}
                    onChange={handleChange}
                />

            </form>

            {data.map((howto => {
                return (<Dashboard key={howto.id} title={howto.name} desc={howto.desc} />)
            }
            ))}

        </section>
    );
}