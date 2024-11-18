import React from 'react'
import { Bubble, CartIconStyled } from './CartIconStyled'
import { PiShoppingCartLight } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../../../../Redux/ToggleMenu/toggleMenuSlice'
import { showModalUser } from '../../../../Redux/User/userSlice'
import { showCartToggle } from '../../../../Redux/Cart/CartSlice'



const CartIcon = () => {

  const { cartProducts } = useSelector(state => state.cart)

  const { showResponsiveMenu } = useSelector(state => state.toggleMenu)

  const { modalUser } = useSelector(state => state.user)

  const dispatch = useDispatch()

  const quantityBubble = cartProducts.map((item) => item.quantity).reduce((acc, cur) => { return acc + cur }, 0)


  const closeToggleMenu_ModalUser = () => {
    if (modalUser) {
      return dispatch(showModalUser())
    }
    else if (showResponsiveMenu) {
      return dispatch(showMenu())
    }
    else { return null }
  }


  return (

    <CartIconStyled onClick={() => { 
      dispatch(showCartToggle());
      closeToggleMenu_ModalUser()}}
    >
      <Bubble><span>{quantityBubble}</span></Bubble>
      <PiShoppingCartLight />
    </CartIconStyled>

  )
}

export default CartIcon
