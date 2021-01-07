import React, {Component, useState} from 'react'
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: 'What is react?',
    content: 'React is a frontend JS framework'
  },
  {
    title: 'Why use react?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use react?',
    content: 'Use react by creating components'
  },
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
]
const App = () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      <Translate />
    </div>
  )
}

// <button onClick={() => setShowDropdown(!showDropdown)}>
//   Toggle Dropdown
// </button>
// {showDropdown &&
// <Dropdown selected={selected}
//           onSelectedChange={setSelected}
//           options={options}/>
// }


// class App extends Component {
//   render (){
//     return (
//       <div>
//         <h1>Widget App</h1>
//         <br/>
//         <Dropdown options={options}/>
//       </div>
//     )
//   }
// }
//        <Accordion items={items}/>
//        <Search />d
export default App