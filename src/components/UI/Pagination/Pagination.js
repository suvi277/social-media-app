import React from 'react'
import './Pagination.scss';


const Pagination = ({ currentPage, perPage, total, paginate}) => {
  const pages = [];

  for(let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i)
  } 

  return (
    <ul className="py-4 pagination justify-content-end">
    {pages.map(page => (
      <li className="page-item" key={page}>
        <button className={page === currentPage ? 'active': ''} type="button" onClick={() => paginate(page)}>{page}</button>
      </li>
    ))}
    </ul>
  )
}


export { Pagination }