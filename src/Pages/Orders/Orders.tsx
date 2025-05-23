import React, { useEffect } from 'react'
import { IconTimer, InstructionsContainer, OrderCard, OrdersContainer, OrdersWrapper } from './OrdersStyled'
import { RiTimer2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux'
import { clearError, fetchOrdersStart, orderFail } from '../../Redux/Orders/ordersSlice';
import { getOrders } from '../../Axios/axiosOrders';
import { fetchOrdersEnd } from '../../Redux/Orders/ordersSlice';
import { useSelectorTS } from '../../Utils/constants';
import { AppDispatch } from '../../Redux/store';





const Orders: React.FC = () => {


    const { orders, error } = useSelectorTS(state => state.orders)
    const {currentUser} = useSelectorTS(state=>state.user)
    const dispatch = useDispatch<AppDispatch>()

    
    useEffect(()=>{

        dispatch(fetchOrdersStart());
        
        getOrders(currentUser?.token, dispatch);
        
        dispatch(fetchOrdersEnd());

        if(!currentUser?.token) {
            dispatch(orderFail('Error al crear la orden, no se ha podido identificar su usuario.'))
        }
        else {
            error && dispatch(clearError())
        }
},[currentUser?.token, orders, error, dispatch])


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
<InstructionsContainer>
    <h3>Instrucciones a seguir:</h3>
    <p>Contactanos desde la seccion "Contactanos", indicando el <b>ID de la orden</b> y te enviaremos todos los datos para proseguir con la compra.</p>
</InstructionsContainer>
        </OrdersWrapper>
    )
}

export default Orders
