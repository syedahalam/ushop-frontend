import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Container } from 'react-bootstrap';
import HomeScreen from './components/Screens/Homescreen';

function App() {
  return (
		<div>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
