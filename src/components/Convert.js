import React, {useState, useEffect} from 'react'
import axios from "axios";
const TRANSLATE_API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"

const Convert = ({language, text}) => {
  const [translated, setTranslated] = useState('')
  const [debounceSearch, setDebounceSearch] = useState(text);

  useEffect(() => {
    const cancelSearch = setTimeout(() => {
      setDebounceSearch(text)
    }, 300)

    return () => {
      clearTimeout(cancelSearch)
    }
  }, [text])

  useEffect(() => {
    const doTranslation = async () => {
      console.log(`New language or text detected`,)
      const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: TRANSLATE_API_KEY
        },
      })
      setTranslated(data.data.translations[0].translatedText)
    }
    if (text) {
      doTranslation();
    }
  }, [debounceSearch])

  return (
    <React.Fragment>
      {translated}
    </React.Fragment>
  )
}

export default Convert