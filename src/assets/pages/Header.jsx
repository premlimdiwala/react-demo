import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to="/">Home</Link> ||
      <Link to="/showdata">ShowData</Link>
    </div>
  )
}

export default Header
