import { useState } from 'react'

import Button from 'components/Button'
import YearInput from 'components/YearInput'

import './styles.css'

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
    <div className="app-container w-full bg-slate-100">
      <div className="header m-auto mb-4 bg-slate-800 shadow">
        <h1 className="pt-2 text-center text-white">
          Oracle Technical Exam - Movie List - Developed in React by Juan
          Alphonso D. Maligad
        </h1>
      </div>
      <div className="m-auto flex w-3/6 justify-center space-x-2">
        <YearInput
          onChange={handleActiveYear}
          placeholder="Enter Year ex. 2015"
        />
        <Button onClick={handleSearch} label="Search" />
      </div>
      <div className="my-4 text-center">{renderResults()}</div>
    </div>
  )
}

export default App
