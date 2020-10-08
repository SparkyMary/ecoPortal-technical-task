import React from 'react'
import styles from './Page.module.scss'
import DataGetter from '../../partial/DataGetter/DataGetter'

export const Page = () => {
  return (
    <div className={styles.root}>
      <DataGetter />
    </div>
  )
}

export default Page
