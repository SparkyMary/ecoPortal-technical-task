import React from 'react'
import _ from 'lodash'
import styles from './UserDataTreeNode.module.scss'
import { USER_DATA_TYPE } from '../../types'

export const UserDataTreeNode = ({ person, allUsers }) => {
  const children = _.filter(allUsers, { parentId: person.id })

  return (
    <div className={styles.root} data-test-id={'ecoPortal-UserNode'}>
      <div className={styles.name}>- {person.name}</div>
      {_.map(children, (child) => {
        return (
          <UserDataTreeNode person={child} allUsers={allUsers} key={child.id} />
        )
      })}
    </div>
  )
}

UserDataTreeNode.propTypes = {
  person: USER_DATA_TYPE,
}

export default UserDataTreeNode
