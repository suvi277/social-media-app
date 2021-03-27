import React from 'react'
import './Dropdown.scss'


const Dropdown = ({ defaultOption, items, change, fill}) => {
  return (
    <select className={`dropdown rounded ${fill ? 'fill' : ''}`} onChange={change}>
        <option value='all'>{defaultOption}</option>
        {
          items.map((item, index) => (
            <option key={item.value} value={item.value} >{item.name}</option>
          ))
        }
      </select>
  )
}


export { Dropdown }