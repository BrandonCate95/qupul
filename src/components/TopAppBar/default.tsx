import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'

import * as ROUTES from '../../constants/routes'
import AppBarSearch from '../SearchForms/appbarSearch'

function DefaultTopAppBar() {
  return(
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit"
          to={ROUTES.HOME.path}
          component={Link}
        >
          Q
        </IconButton>
          
        <AppBarSearch />
      </Toolbar>
    </AppBar>
  )
}

export default DefaultTopAppBar