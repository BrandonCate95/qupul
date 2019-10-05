import React, { useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import DefaultTopAppBar from '../TopAppBar/default'

const BODY = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at. Et netus et malesuada fames ac turpis egestas integer. Aliquet enim tortor at auctor urna nunc id cursus. Aliquet enim tortor at auctor urna nunc. Libero justo laoreet sit amet cursus sit amet. Diam vulputate ut pharetra sit amet. Iaculis eu non diam phasellus vestibulum lorem sed risus. Porttitor leo a diam sollicitudin tempor id. Risus in hendrerit gravida rutrum quisque non. Aliquam faucibus purus in massa tempor. Interdum velit euismod in pellentesque massa placerat. Dictum sit amet justo donec enim. Ultricies leo integer malesuada nunc vel risus. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Aliquam etiam erat velit scelerisque in. Eget gravida cum sociis natoque. Arcu odio ut sem nulla pharetra diam sit. Feugiat nisl pretium fusce id velit ut tortor.

Feugiat nibh sed pulvinar proin. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Ipsum dolor sit amet consectetur adipiscing. Risus quis varius quam quisque id diam vel quam. Est velit egestas dui id ornare. Nam libero justo laoreet sit amet cursus sit amet. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Nulla aliquet enim tortor at auctor. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Mauris sit amet massa vitae tortor condimentum lacinia quis. Volutpat blandit aliquam etiam erat velit scelerisque. Eros donec ac odio tempor. Eget sit amet tellus cras adipiscing.

Vestibulum morbi blandit cursus risus at ultrices. Ut consequat semper viverra nam libero justo laoreet sit amet. Velit aliquet sagittis id consectetur purus ut faucibus. Pellentesque sit amet porttitor eget dolor morbi non. Suspendisse potenti nullam ac tortor. Ipsum dolor sit amet consectetur adipiscing elit ut. In hendrerit gravida rutrum quisque non tellus. Lacus luctus accumsan tortor posuere ac ut. Dolor morbi non arcu risus quis. Interdum velit euismod in pellentesque massa. Vitae tempus quam pellentesque nec nam aliquam. Pretium nibh ipsum consequat nisl vel pretium lectus. Ut lectus arcu bibendum at varius vel pharetra vel turpis. Leo a diam sollicitudin tempor. Lacus luctus accumsan tortor posuere ac ut.

Adipiscing enim eu turpis egestas pretium. Morbi tempus iaculis urna id volutpat lacus. Justo eget magna fermentum iaculis eu non diam phasellus. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Fermentum leo vel orci porta. Urna molestie at elementum eu facilisis sed odio. Gravida rutrum quisque non tellus. Nec feugiat nisl pretium fusce id velit ut tortor. Elementum integer enim neque volutpat ac tincidunt vitae semper. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus.

Amet massa vitae tortor condimentum lacinia quis vel. Id velit ut tortor pretium viverra suspendisse potenti. Facilisi nullam vehicula ipsum a arcu. Semper risus in hendrerit gravida rutrum. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Magna eget est lorem ipsum dolor sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Eget dolor morbi non arcu. Massa enim nec dui nunc mattis. Cursus turpis massa tincidunt dui ut ornare lectus sit. Feugiat scelerisque varius morbi enim nunc faucibus.`

const INITIAL_STATE = {
  title: 'This is the Title!',
  username: 'Username',
  body: BODY
}

export default function DocumentPage(){

  const [values, setValues] = React.useState();

  useEffect(() => 
    setValues(INITIAL_STATE),
  []);

  return(
    <Box>
      <DefaultTopAppBar />
      <Box textAlign="center" m={2}>
        <Typography variant="h3">
          {values && values.title && 
            values.title
          }
        </Typography>
        <Typography variant="h6" color="textSecondary">
          by {values && values.username && 
            values.username
          }
        </Typography>
      </Box>
      <Box m={2}>
        <Typography variant="body1" component="p">
          {values && values.body && 
            values.body
          }
        </Typography>
      </Box>
    </Box>
  )
}