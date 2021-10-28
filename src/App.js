import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from './components/Screens/Homescreen';
import ProductScreen from './components/Screens/ProductScreen';
import CartScreen from './components/Screens/CartScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/product/:id' component={ProductScreen} exact />
					<Route path='/cart/:id?' component={CartScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
