import React, {useState} from 'react'

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null)  // array destructuring to access the var (getter) and the setter

  const onTitleClick = (idx) => {
    console.log(`title clicked at idx: `, idx)
    activeIndex === null || activeIndex !== idx ? setActiveIndex(idx) : setActiveIndex(null)
  }
  const renderedItems = items.map((item, idx) => {
    const active = idx === activeIndex ? 'active' : ''  // determine if this is the selected item
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`}
             onClick={() => onTitleClick(idx)} >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return (
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  )
}

export default Accordion
