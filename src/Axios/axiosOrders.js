import axios from 'axios'
import { APIURL } from '../Utils/constants'
import { addOrders, fetchOrdersEnd, fetchOrdersStart, orderFail } from '../Redux/Orders/ordersSlice';




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
     return dispatch(orderFail(error.message))
     
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
        
    dispatch(addOrders(orders.data.data))

      } 

    dispatch(fetchOrdersEnd())

    } catch (error) {
    return dispatch(orderFail(error.message))
    
    }
  };