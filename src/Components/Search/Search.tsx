import {FC, SyntheticEvent, useEffect, useState} from 'react';
import SearchIcon from "@mui/icons-material/Search"
import styles from "./search.module.css"
import {useLocation, useMatch, useNavigate} from "react-router-dom";

const Search: FC = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const isMatch = useMatch("search")

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const val = value.trim()
        if (!val) return
        navigate(`/search?q=${val}`)
    }

    useEffect(() => {
        if (isMatch) return
        setValue("")
    }, [location, isMatch])

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <SearchIcon/>
            <input onChange={(e) => setValue(e.target.value)}
                   placeholder={"Search"}
                   autoComplete={"off"}
                   name={"search"}
                   value={value}
                   type={"text"}
            />
            <button type={"submit"}>
                Search
            </button>
        </form>
    );
}

export default Search;