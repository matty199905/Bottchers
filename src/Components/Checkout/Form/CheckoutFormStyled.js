import { Form, Formik } from 'formik';
import styled from 'styled-components';


export const CheckoutContainer = styled.div`
  width: 35%;
  margin: 110px 0px 0px 100px;
  padding: 0;

  h2{
    margin-bottom: 30px;
  }
  @media (max-width: 867px) {
    margin-left: 0px;
  }
`;

export const FormikContainer = styled(Formik)`
  display: flex;
  flex-direction: column;
`



export const FormContainer = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;