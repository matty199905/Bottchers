import axios from 'axios'
import { APIURL } from '../Utils/constants'
import { addOrders, fetchOrdersEnd, fetchOrdersStart, OrderFail } from '../Redux/Orders/ordersSlice';
import { clearOrders } from '../Redux/Orders/ordersSlice';



export const createOrder = async (orderData, token, dispatch) => {


    try {
     
  const response = await axios.post(`${APIURL}/orders`, orderData, {
   headers: {
      "x-token": token}
  })
  
      if (response) {
       return getOrders(token, dispatch);
       
      }
    } catch (error) {
     return dispatch(OrderFail(error.message))
     
    }
  };


  export const getOrders = async (token, dispatch) => {

    dispatch(fetchOrdersStart())
  
    try {
      const orders = await axios.get(`${APIURL}/orders`, {
        headers: {
          'x-token': token,
        },
      });
      if (orders) {
        
    return dispatch(addOrders(orders.data.data))

      } 

return dispatch(fetchOrdersEnd())

    } catch (error) {
    return dispatch(OrderFail(error.message))
    
    }
  };