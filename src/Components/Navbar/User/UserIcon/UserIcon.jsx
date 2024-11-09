import React from 'react'
import { IniciaSesion, UserNavLinkStyled, UserStyled } from './UserIconStyled'
import { CiUser } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showModalUser } from '../../../../Redux/User/userSlice'

const UserIcon = () => {


 const {currentUser} = useSelector(state => state.user)

 const dispatch = useDispatch()

 const navigate = useNavigate()


  return (

                    <UserStyled onClick={()=> currentUser ? dispatch(showModalUser()) : navigate('/login')}>
              
                        <CiUser />
                        <IniciaSesion>{currentUser ? (currentUser?.nombre?.charAt(0).toUpperCase() + currentUser?.nombre?.slice(1) ) : 'Iniciar Sesión'}</IniciaSesion>

                    </UserStyled>
               
  )
}

export default UserIcon



// HACER UN MODAL PARA CERRAR SESION