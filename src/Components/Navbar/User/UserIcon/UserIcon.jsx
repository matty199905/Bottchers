import React from 'react'
import { IniciaSesion, UserStyled } from './UserIconStyled'
import { CiUser } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showModalUser } from '../../../../Redux/User/userSlice'
import { showMenu } from '../../../../Redux/ToggleMenu/toggleMenuSlice'

const UserIcon = () => {


  const { currentUser } = useSelector(state => state.user)

  const { showResponsiveMenu } = useSelector(state => state.toggleMenu)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const closeToggleMenuOnModalUser = () => {
    if (showResponsiveMenu) {
      return dispatch(showMenu());
    }
    else { return null }
  }

  return (

    <UserStyled onClick={() => {currentUser ? dispatch(showModalUser()) : navigate('/login');
      closeToggleMenuOnModalUser()}
    }>

      <CiUser />
      <IniciaSesion>{currentUser ? (currentUser?.nombre?.charAt(0).toUpperCase() + currentUser?.nombre?.slice(1)) : 'Iniciar Sesión'}</IniciaSesion>

    </UserStyled>

  )
}

export default UserIcon



// HACER UN MODAL PARA CERRAR SESION