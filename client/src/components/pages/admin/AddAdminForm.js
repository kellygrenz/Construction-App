// import React from 'react'
// import PropTypes from 'prop-types'

// const AddAdminForm = ({domainDataAdd}) => {
//   return (
//     <div>
//       hello{domainDataAdd}
//     </div>
//   )
// }

// AddAdminForm.propTypes = {
//   domainDataAdd: PropTypes.array.isRequired
// }
// export default AddAdminForm

import React from 'react'
import PropTypes from 'prop-types'

const AddAdminForm = ({id, onChangeHandler, addAdmin}) => {
  return (
    <div>

      <div>
        <h3>Name:</h3>
        <input type='text' onChange={onChangeHandler} placeholder='name' id='name' />
      </div>
      <div>
        <h3>Email:</h3>
        <input type='text' onChange={onChangeHandler} placeholder='email' id='email' />
      </div>
      <button>
        <input type='text' onChange={onChangeHandler} placeholder='email' />
      </button>
    </div>
  )
}

AddAdminForm.propTypes = {
  id: PropTypes.object,
  onChangeHandler: PropTypes.func.isRequired,
  addAdmin: PropTypes.func.isRequired
}

export default AddAdminForm
