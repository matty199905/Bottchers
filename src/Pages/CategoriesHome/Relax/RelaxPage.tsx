import React from 'react'
import { RelaxWrapper } from './RelaxPageStyled'
import RelaxIntroImg from '../../../img/RelaxIntroPage.jpg'
import IntroPageContainer from '../../../Components/IntroPageContainer/IntroPageContainer'
import ProductsWrapper from '../../../Components/Products/ProductsWrapper/ProductsWrapper'

const RelaxPage: React.FC = () => {

  return (
    <RelaxWrapper>

      <IntroPageContainer
        background={RelaxIntroImg}
        title={'Productos Relax'}
      />


      <ProductsWrapper
        hideFilters={true}
        page='relax' />

    </RelaxWrapper>
  )
}

export default RelaxPage
