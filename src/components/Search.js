import React, {useState, useEffect} from 'react'
import axios from "axios";

const Search = () => {

  const [term, setTerm] = useState('programming')
  const [results, setResults] = useState([])

  useEffect(() => {
    console.log(`Running search for term: `, term)
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      })
      console.log(`results: `, data)
      setResults(data.query.search)
    }
    search();
  }, [term])

  const doSearch = event => {
    console.log(`making search for `, event.target.value)
    setTerm(event.target.value)
  }

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button"
             target="_blank"
             href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            <br/>
          </div>
        </div>

      </div>
    )
  })

  return (
    <React.Fragment>
      <div>SEARCH STUFF</div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter Search Term</label>
          <input type="text"
                 className="input"
                 value={term}
                 onChange={doSearch}
          />
        </div>
        <div className="results">
          {term && renderedResults}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Search