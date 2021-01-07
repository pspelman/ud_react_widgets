import React, {useState} from 'react'
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
  {
    label: 'French',
    value: 'fr'
  },
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState('')
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter Text to translate</label>
          <input type="text"
                 onChange={(e) => setText(e.target.value)}
                 value={text}
          />
        </div>
      </div>
      <Dropdown options={options}
                label={'Select a language'}
                selected={language}
                onSelectedChange={setLanguage}
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text}/>

    </div>
  )
}

export default Translate