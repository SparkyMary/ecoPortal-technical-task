import React from 'react'
import _ from 'lodash'
import { USER_DATA_SET_TYPE } from '../../types'
import styles from './UserDataTree.module.scss'
import UserDataTreeNode from '../UserDataTreeNode/UserDataTreeNode'

export const UserDataTree = ({ data }) => {
  const parents = _.filter(data, { parentId: '' })

  return (
    <div className={styles.root}>
      {_.map(parents, (parent) => {
        return (
          <UserDataTreeNode person={parent} allUsers={data} key={parent.id} />
        )
      })}
    </div>
  )
}

UserDataTree.propTypes = {
  data: USER_DATA_SET_TYPE,
}

export default UserDataTree
