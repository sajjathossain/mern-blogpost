import { GoSearch } from 'react-icons/go'
import classes from './SearchBar.module.scss'
import { useState } from 'react'

const SearchBar = () => {
    const [searchData, setSearchData] = useState('')
    
    const handleSubmit = (e: any) => {
        e.preventDefault()

        console.log("Search Data => ", searchData)
        setSearchData('')
    }

    return (
        <form method="POST" className={`${classes.container}`} onSubmit={handleSubmit}>
            <div className={classes.searchBar}>
                <input onChange={(e) => setSearchData(e.target.value)} value={searchData} type="text" placeholder="Enter tag" name="search" id="search" required />
                <button type="submit" className={classes.btn}>
                    <GoSearch />
                </button>
            </div>
        </form>
    )
}

export default SearchBar
