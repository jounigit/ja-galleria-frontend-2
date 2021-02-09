
import { removeData } from '../../../../services/apiService'

// resign actions
export  const handleResign = () => () => {
  const ok = window.confirm(`remove user ${auth.user}?`)
  if ( ok===false) { return }
  removeData(userDispatch, DELETE_USER, 'users', auth.id)
  dispatch({ type: LOGOUT })
  notify( msgDispatch, 'user resigned successfully', 5, 'orange' )
}