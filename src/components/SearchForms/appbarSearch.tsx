import React from 'react'

import { withRouter } from 'react-router-dom'

import { fade, makeStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { search } from './search';

/**
 * @todo -- Convert to styled components or pure scss solution
 */
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: "5px",
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));

const INITIAL_STATE = {
  search: ''
}

function AppBarSearch(props){
  const classes = useStyles({})

  const [values, setValues] = React.useState(INITIAL_STATE);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return(
    <form
      onSubmit={(event) => search(event, props.history)}
    >
      <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={values.search}
          onChange={handleChange('search')}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </form>
  )
}

export default withRouter(AppBarSearch)