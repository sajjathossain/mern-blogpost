import { useEffect, useState } from 'react'

import { GoSearch } from 'react-icons/go'
import { Link } from 'react-router-dom'
import classes from './SearchBar.module.scss'

const SearchBar = (props: any) => {
  const [searchData, setSearchData] = useState('')
  const [dataToDisplay, setDataToDisplay]: any[] = useState([])

  const handleSearch = (e: any) => {
    e.preventDefault()
    const searchedTags: any[] = []

    // console.log(props.data)
    const searchText = e.target.value
    for (const each of props.data) {
      if (each.title.toUpperCase().indexOf(searchText.toUpperCase()) > -1) {
        searchedTags.push(each)
      }
    }

    setDataToDisplay(searchedTags.splice(0))
  }

  useEffect(() => {
    setSearchData(searchData)
  }, [searchData])

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.container}`}>
        <div className={classes.searchBar}>
          <input
            autoComplete={'off'}
            onKeyUp={handleSearch}
            onChange={(e) => setSearchData(e.target.value)}
            value={searchData}
            type="text"
            placeholder="Enter text"
            name="search"
            id="search"
            required
          />
          <button type="submit" className={classes.btn}>
            <GoSearch />
          </button>

          <div
            className={classes.output}
            style={{
              display:
                dataToDisplay.length <= 0 || searchData.length <= 0
                  ? 'none'
                  : 'block',
            }}
          >
            {dataToDisplay.map((each: any) => {
              return (
                <div key={each._id}>
                  <Link
                    to={{
                      pathname: `/post/${each._id}`,
                      state: each,
                    }}
                  >
                    {each.title}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
