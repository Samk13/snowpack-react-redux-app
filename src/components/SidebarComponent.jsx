import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebarComponent.module.css'
import routes from '../router/routes'

export default function sidebarComponent() {
  return (
    <aside className={styles.aside}>
      {routes.map((route, key) => (
        <NavLink
          className={styles.link}
          key={key}
          activeClassName={styles.active}
          to={route.path}
          exact
        >
          {route.name}
        </NavLink>
      ))}
    </aside>
  )
}
