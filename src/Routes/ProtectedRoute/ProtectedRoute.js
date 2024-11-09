
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children, redirectTo}) => {

    const {user} = useSelector(state => state)

return user.currentUser?  children : <Navigate to={redirectTo} />
}

export default ProtectedRoute
