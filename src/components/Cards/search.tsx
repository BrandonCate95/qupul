import React from 'react'

import { Box, Card, CardContent, Typography } from '@material-ui/core'

export default function SearchCard() {
  return (
    <Box m={1}>
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
    </Box>
  );
}