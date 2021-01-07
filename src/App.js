import React, {Component} from 'react'
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

class App extends Component {
  render (){
    return (
      <div>
        <h1>Widget App</h1>
        <br/>
        <Search />
      </div>
    )
  }
}
//        <Accordion items={items}/>
export default App