import React, { useEffect } from 'react'
import { IconTimer, OrderCard, OrdersContainer, OrdersWrapper } from './OrdersStyled'
import { RiTimer2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../UI/Button/Button'
import { clearError, fetchOrdersStart, OrderFail } from '../../Redux/Orders/ordersSlice';
import { getOrders } from '../../Axios/axiosOrders';
import { fetchOrdersEnd } from '../../Redux/Orders/ordersSlice';






const Orders = () => {


    const { orders, error, loading } = useSelector(state => state.orders)
    const {currentUser} = useSelector(state=>state.user)
    const dispatch = useDispatch()

   
    
    
    useEffect(()=>{

        dispatch(fetchOrdersStart())
        
        if(!orders){
            
            getOrders(currentUser?.token, dispatch)
        }

        dispatch(fetchOrdersEnd())

        if(!currentUser?.token) {
            dispatch(OrderFail())
        }
        else {
            error && dispatch(clearError())
        }
},[currentUser?.token, orders, error])


    return (
        <OrdersWrapper>

            <h1>Mis Órdenes</h1>


            <OrdersContainer>


                {
                    orders?.length ?

                        orders?.map((item) =>

                            <OrderCard
                                state={{...item}}
                                key={item._id}
                                to={'orderOverview'}>

                                <p>ID de la orden: <span>{item._id.slice(15)}</span></p>

                                <IconTimer>
                                    <RiTimer2Fill />
                                </IconTimer>

                            </OrderCard> )

                        :

                        <p>Aún no tienes órdenes pendientes.</p>
                }



            </OrdersContainer>

<Button onClick={()=> window.location.reload()}>Refrescar Órdonenes</Button>

        </OrdersWrapper>
    )
}

export default Orders
