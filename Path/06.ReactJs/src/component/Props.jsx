// import React from 'react'
import PropTypes from 'prop-types';

const Props = (props) => {
    
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  )
}


Props.propTypes = {
  message: PropTypes.string.isRequired
}

export default Props