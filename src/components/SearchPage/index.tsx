import React from 'react'
import { Box } from '@material-ui/core'
import DefaultTopAppBar from '../TopAppBar/default'
import SearchCard from '../Cards/search'
  
var loop = [0,1,2,3,4,5,6,7,8,9]

function SearchPage() {
  return(
    <Box>
      <DefaultTopAppBar />     
      {loop.map(num => <SearchCard key={num} />)}
    </Box>
  )
}

export default SearchPage