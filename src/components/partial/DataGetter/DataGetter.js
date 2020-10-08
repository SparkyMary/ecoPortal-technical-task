import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import styles from './DataGetter.module.scss'
import { makeUserDataCall } from '../../appCalls'
import Papa from 'papaparse'
import UserDataTree from '../UserDataTree/UserDataTree'

export const DataGetter = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getData = () => {
    let updatedData = null
    setIsLoading(true)
    makeUserDataCall()
      .then((response) => {
        const datatWithHeader = `id,name,parentId\n${response.data}`
        updatedData = _.get(
          Papa.parse(datatWithHeader, { header: true }),
          'data',
          []
        )

        // NOTE: we assume that incoming data doesn't have
        // any circular references
        // author relies on BE to check that
        setData(_.filter(updatedData, (item) => !!item.id))
      })
      .catch((error) => {
        console.info('error: ', error)
        setIsError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (data === null && !isLoading && !isError) {
      getData()
    }
  }, [data, isLoading, isError])

  useEffect(() => {
    setIsLoading(!data)
  }, [data])

  return (
    <div className={classnames(styles.root, { [styles.centered]: isLoading })}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && isError && (
        <div>
          <div className={styles.error}>
            There is an error has occurred, please try again
          </div>
          <button onClick={getData}>Try again</button>
        </div>
      )}
      {!isLoading && !isError && data && data.length === 0 && (
        <div>
          <div className={styles.error}>There is no data available</div>
        </div>
      )}
      {!isLoading && !isError && data && data.length > 0 && (
        <UserDataTree data={data} />
      )}
    </div>
  )
}

DataGetter.propTypes = {}

export default DataGetter
