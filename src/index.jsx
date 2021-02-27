import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
// import App from './App.jsx'
const AppComponent = lazy(() => import('./App.jsx'))
const renderLoader = () => <p>Loading</p>
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={renderLoader()}>
      <AppComponent />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
