import React from 'react'
import { Bubble, CartIconStyled } from './CartIconStyled'
import { PiShoppingCartLight } from 'react-icons/pi'
import { useSelector } from 'react-redux'



const CartIcon = ({onClick = e => e.preventDefault()}) => {

  const { cartProducts } = useSelector(state => state.cart)


  const quantityBubble = cartProducts.map((item)=> item.quantity).reduce((acc, cur)=>{return acc + cur},0)



  return (

<CartIconStyled
onClick={onClick}
>
  <Bubble><span>{quantityBubble}</span></Bubble>
<PiShoppingCartLight />
</CartIconStyled>

  )
}

export default CartIcon
