import React from 'react'
import { IniciaSesion, UserNavLinkStyled, UserStyled } from './UserIconStyled'
import { CiUser } from 'react-icons/ci'

const UserIcon = () => {
  return (
    <UserNavLinkStyled to='/register'>
                    <UserStyled>
                        <CiUser />
                        <IniciaSesion>Inicia Sesión</IniciaSesion>
                    </UserStyled>
                </UserNavLinkStyled>
  )
}

export default UserIcon
