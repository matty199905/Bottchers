
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelectorTS } from '../../Utils/constants'

type ProtectedRouteProps = {
  redirectTo: string;
  children: React.ReactNode;
};



const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectTo }) => {

  const { user } = useSelectorTS(state => state);
  
  return user.currentUser ? <>{children}</> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;



