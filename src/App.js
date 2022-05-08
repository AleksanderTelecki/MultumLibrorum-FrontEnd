import { Container } from 'react-bootstrap'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {LoginScreen} from "./screens/LoginScreen";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <main className="py-3">
              <Container>
                  <Routes>
                  <Route path='/' element={<HomeScreen/>} exact />
                  <Route path='/book/:id' element={<ProductScreen/>} />
                  <Route path='/login' element={<LoginScreen/>} />
                  </Routes>
              </Container>
          </main>
          <Footer />
      </BrowserRouter>
  );
}

export default App;


