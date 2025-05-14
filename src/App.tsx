import React from 'react'
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import ModalCart from './Components/Navbar/Cart/ModalCart/ModalCart';
import Navbar from './Components/Navbar/Navbar';
import ResponsiveMenu from './Components/Navbar/ResponsiveMenu/ResponsiveMenu';
import ModalUser from './Components/Navbar/User/UserIcon/ModalUser';
import RoutesApp from './Routes/Routes';


const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <ResponsiveMenu />
      <ModalUser />
      <ModalCart />
      <RoutesApp />
      <Footer />
    </Layout>
  );
}

export default App



