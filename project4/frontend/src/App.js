import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from 'react-bootstrap';
import HomeScreen from './components/Screens/Homescreen';
import { Route } from 'react-router-dom';
import ProductScreen from './components/Screens/ProductScreen';


function App() {
  return (
		<div>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/product/:id' component={ProductScreen} exact />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
