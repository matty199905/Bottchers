import React from 'react'
import { CardsContainer, EnvioStyled, HrStyled, OverwiewWrapper, PriceContainerStyled, PriceTotalStyled, SubtotalStyled, TotalStyled } from './OrderOverviewStyled'
import CheckoutCardProduct from '../../Components/Checkout/Products/CheckoutCardProduct'
import { formatPrice } from '../../Utils/formatPrice'
import { useLocation} from 'react-router-dom'

const OrderOverview = () => {

const location = useLocation()

console.log(location.state);

const price = location?.state.items.map((item) => item.quantity * item.price).reduce((acc, cur) => { return acc + cur }, 0)

const shippingCost = location?.state.shippingCost

  return (
    <OverwiewWrapper>



      <h1>Productos de la orden: <span>{location.state._id.slice(15)}</span></h1>


      <CardsContainer>

         {

          location?.state.items.map((item)=>  <CheckoutCardProduct orderOverview={true} {...item} key={item.id} />)

         }


      </CardsContainer>




      <PriceContainerStyled>

        <SubtotalStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(price)}</span>
        </SubtotalStyled>

        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>

        <HrStyled />

        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(shippingCost + price)}</PriceTotalStyled>
        </TotalStyled>

      </PriceContainerStyled>



    </OverwiewWrapper>
  )
}

export default OrderOverview
