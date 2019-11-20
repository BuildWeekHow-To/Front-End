import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import HowToCard from "./HowToCard";


export default function SearchForm() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axiosWithAuth()
            .get("https://build-week-how-to.herokuapp.com/api/howtos")
            .then(response => {
                console.log(response)
                const howtos = response.data.filter(data => data.name.toLowerCase().includes(query.toLowerCase())
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
                <button type="submit">Search</button>
            </form>

            {data.map((howto => {
                return (<HowToCard key={howto.id} title={howto.name} desc={howto.desc} />)
            }
            ))}

        </section>
    );
}