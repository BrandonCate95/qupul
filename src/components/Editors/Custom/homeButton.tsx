import React from 'react'

import { withRouter } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'

import * as ROUTES from '../../../constants/routes'

function HomeButton(props){
  
  const gotoHome = () => {
    props.history.push(ROUTES.HOME.path)
  }  

  return(
    <div
      style={{display: 'flex', alignItems: 'center', margin: '0 6px 6px 6px'}}
      onClick={gotoHome}
    >
      <HomeIcon />
    </div>
  )
}

export default withRouter(HomeButton)