import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import ModalCart from './Components/Navbar/Cart/ModalCart/ModalCart';
import Navbar from './Components/Navbar/Navbar';
import RoutesApp from './Routes/Routes';



function App() {
  return (

    <Layout>
        <Navbar/>
        <ModalCart/>
        <RoutesApp />
        <Footer />
    </Layout>

  );
}

export default App;
