import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = props => (
  <ul>
    <li>
      <Link to="/spaces">Spaces</Link>
    </li>
    <li>
      <Link to="/transactions">Transactions</Link>
    </li>
    <li>
      <Link to="/account">Account</Link>
    </li>
  </ul>
)

export default AppHeader
