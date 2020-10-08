import React from 'react'
import styles from './App.module.scss'
import Page from '../containers/Page/Page'

function App() {
  return (
    <div className={styles.app} data-test-id={'ecoPortal-MainContainer'}>
      <header>
        <h1 className={styles.appHeader}>
          Front End Technical Task - Maria Chibel, Q#8
        </h1>
      </header>
      <main data-test-id={'ecoPortal-UsersMain'}>
        <Page />
      </main>
    </div>
  )
}

export default App
