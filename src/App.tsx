import { useState } from 'react'

import Button from 'components/Button'
import YearInput from 'components/YearInput'

interface Data {
  Title: string
  Year: number
  imdbID: string
}

const API_URL = 'https://jsonmock.hackerrank.com/api/moviesdata?Year='

const App = () => {
  const [activeYear, setActiveYear] = useState<number>()
  const [activeResults, setActiveResults] = useState<Data[] | undefined>()

  const handleActiveYear = (year?: number) => {
    if (activeYear !== year) {
      setActiveYear(year)
    }
  }

  const handleSearch = async () => {
    const response = await fetch(API_URL + activeYear)
    const responseJson = await response.json()

    setActiveResults(responseJson.data)
  }

  const renderResults = () => {
    if (!activeResults) {
      return null
    }

    if (!activeResults.length) {
      return <div data-test-id="no-result">No Results Found</div>
    }

    return (
      <ul data-test-id="movieList">
        {activeResults.map(({ Title, imdbID }) => {
          return <li key={imdbID}>{Title}</li>
        })}
      </ul>
    )
  }

  return (
    <div>
      <h1>Movie List</h1>
      <div className="flex space-x-2">
        <YearInput onChange={handleActiveYear} />
        <Button onClick={handleSearch} label="Search" />
      </div>
      {renderResults()}
    </div>
  )
}

export default App
