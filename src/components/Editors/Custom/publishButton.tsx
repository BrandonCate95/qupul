import React from 'react'

import PublishIcon from '@material-ui/icons/Publish'

function PublishButton(){
  return(
    <div
      style={{display: 'flex', alignItems: 'center', margin: '0 6px 6px 6px', order: 3}}
      onClick={() => console.log('fake publish')}
    >
      <PublishIcon />
    </div>
  )
}

export default PublishButton