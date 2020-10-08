import PropTypes from 'prop-types'

export const USER_DATA_TYPE = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  parentId: PropTypes.string,
})

export const USER_DATA_SET_TYPE = PropTypes.arrayOf(USER_DATA_TYPE)
