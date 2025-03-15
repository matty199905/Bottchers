import React from 'react'
import { ModalSpan, ModalUserContainer } from './ModalUserStyled'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { logout, showModalUser } from '../../../../Redux/User/userSlice'
import { useNavigate } from 'react-router-dom'



const ModalUser = () => {

  const { modalUser } = useSelector(state => state.user)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  return (
    <AnimatePresence>


      {modalUser &&


        <ModalUserContainer
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ type: 'spring', damping: 25 }}
          key='user-modal'
        >

          <ModalSpan onClick={()=> {navigate('/orders'); dispatch(showModalUser()); window.location.reload()}}>
            Mis Ordenes
          </ModalSpan>
<hr />

          <ModalSpan onClick={() => {
            dispatch(logout());
            dispatch(showModalUser());
            navigate('/')
          }}>Cerrar Sesión</ModalSpan>





        </ModalUserContainer>



      }
    </AnimatePresence>

  )
}

export default ModalUser
