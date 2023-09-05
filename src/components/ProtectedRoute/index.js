import {Navigate} from 'react-router-dom'
import Cookie from 'js-cookie'


const ProtectedRoute = props => {
  
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return props.children   // what ever we have use as the children will be passed as children 
}

export default ProtectedRoute
