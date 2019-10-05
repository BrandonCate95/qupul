import { SyntheticEvent } from 'react'
import { History } from 'history'

import * as ROUTES from '../../constants/routes'

export const search = (event: SyntheticEvent, history: History) => {
  event.preventDefault()

  history.push(ROUTES.SEARCH.path)
}