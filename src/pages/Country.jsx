import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/Ui/Loader.jsx"
import { CountryCard } from "../components/Layout/CountryCard.jsx";
import { SearchFilter } from "../components/Ui/SearchFilter.jsx";

export const Country = () => {

    const [isPending, startTransition] = useTransition();   // used to update State without blocking the UI
    const [countries, setCountries] = useState([])

    const [search, setSearch] = useState()
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            setCountries(res.data)
        })
    }, [])

    if (isPending) return <Loader />

    // console.log(search, filter);

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return country;
    }

    const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter;
    }

    //here is the main logic for filtering the countries
    const filteredCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country));
    


    return (
        <section className="country-section">

            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countries={countries}
                setCountries={setCountries}
            />

            <ul className="grid grid-four-cols">{
                filteredCountries.map((curCountry, index) => {
                    return <CountryCard country={curCountry} key={index} />

                })
            }</ul>

        </section>
    )
}