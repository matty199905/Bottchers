import React from 'react'
import { CardsContainer, EnvioStyled, HrStyled, OverwiewWrapper, PriceContainerStyled, PriceTotalStyled, SubtotalStyled, TotalStyled } from './OrderOverviewStyled'
import CheckoutCardProduct from '../../Components/Checkout/Products/CheckoutCardProduct'
import { formatPrice } from '../../Utils/formatPrice'
import { useLocation } from 'react-router-dom'
import { CartProduct } from '../../Redux/Cart/cartSlice'



const OrderOverview: React.FC = () => {


  type OrderState = {
    createdAt: string,
    items: CartProduct[],
    price: number,
    shippingCost: number,
    shippingDetails:
    { name: string, cellphone: string, location: string, address: string },
    status: string,
    total: number,
    user: string,
    __v: number,
    _id: string,
  }



  const location = useLocation() as { state: OrderState };

  const orderState = location.state;

  const price = orderState.items.map((item) => item.quantity * item.price).reduce((acc, cur) => { return acc + cur }, 0)


  return (
    <OverwiewWrapper>



      <h1>Productos de la orden: <span>{orderState._id.slice(15)}</span></h1>


      <CardsContainer>

        {

          orderState.items.map((item: CartProduct) => <CheckoutCardProduct orderOverview={true} {...item} key={item.id} />)

        }


      </CardsContainer>




      <PriceContainerStyled>

        <SubtotalStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(price)}</span>
        </SubtotalStyled>

        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(orderState.shippingCost)}</span>
        </EnvioStyled>

        <HrStyled />

        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(orderState.shippingCost + price)}</PriceTotalStyled>
        </TotalStyled>

      </PriceContainerStyled>



    </OverwiewWrapper>
  )
}

export default OrderOverview
