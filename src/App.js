import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Navbar from './Components/Navbar/Navbar';
import RoutesApp from './Routes/Routes';



function App() {
  return (

    <Layout>
        <Navbar/>
        <RoutesApp />
        <Footer />
    </Layout>

  );
}

export default App;
