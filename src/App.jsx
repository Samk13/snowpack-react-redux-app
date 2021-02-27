import React, { lazy, Suspense } from 'react'
import logo from './logo.svg'
// import { FooterComponent, HeaderComponent, SidebarComponent, LoadingItem } from './components'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import SidebarComponent from './components/SidebarComponent'
import LoadingItem from './components/LoadingItem'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './router/routes.js'
import { useSelector } from 'react-redux'
import { menuStatus } from './features/menu/menuSlice'
import Articles from './features/articles/Articles'
import Posts from './features/posts/Posts.jsx'

function App() {
  const renderLoader = () => <LoadingItem />
  const menuActive = useSelector(menuStatus)
  return (
    <Router>
    <section className={menuActive ? styles.container : styles.container_hide_sidebar}>
      <header className={styles.header}>
        <HeaderComponent />
      </header>
      <main className={styles.main}>
        <Switch>
          <Suspense fallback={renderLoader()}>
            <Route path="/" exact>
              <Articles />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            {/* {routes.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  exact={route.exact}
                  component={lazy(() => import(`${route.location}`))}
                />
              )
            })} */}
          </Suspense>
        </Switch>
      </main>
      {menuActive && <SidebarComponent />}
      <footer className={styles.footer}>
        <FooterComponent className={styles.footer} />
      </footer>
    </section>
  </Router>
  )
}

export default App
