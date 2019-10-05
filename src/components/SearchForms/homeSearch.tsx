import React from 'react'

import { withRouter } from 'react-router-dom'
import { TextField } from '@material-ui/core'

import { search } from './search'

const INITIAL_STATE = {
  search: ''
}

function HomeSearch(props){
  const [values, setValues] = React.useState(INITIAL_STATE);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return(
    <form
      onSubmit={(event) => search(event, props.history)}
    >
      <TextField id="search" label="Search" margin="normal"
        color="primary" variant="outlined"
        style={{borderRadius: '50px', width: '100%'}}
        value={values.search}
        onChange={handleChange('search')}
      />
    </form>
  )
}

export default withRouter(HomeSearch)