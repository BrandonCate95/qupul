import React from 'react'

import { Box, Card, CardContent, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

export default function SearchCard() {
  return (
    <Box m={1}>
      <Link 
        style={{textDecoration: 'none'}}
        to={ROUTES.DOCUMENT.path}
      >
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h4" gutterBottom>
                Word of the Day
            </Typography>
            <Typography color="textSecondary" variant="body1" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}