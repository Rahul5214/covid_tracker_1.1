import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import National from './Components/National';
import StateWise from './Components/StateWise';
import Footer from './Components/Footer';
import getData from './Components/api';
import { useEffect, useState } from 'react';

function App() {

	const [nationalData, setNationalData] = useState({});
	const [stateWiseData, setStateWiseData] = useState([]);

	async function getFullData() {
		const stateWiseData = await getData();
		setStateWiseData(stateWiseData);
		const [nationalData] = stateWiseData;
		setNationalData(nationalData);
	}
	useEffect(() => {
		getFullData();
	}, []);

	// console.log(nationalData);
	// console.log(stateWiseData);

	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/national"><National data={nationalData} /></Route>
					<Route path="/statewise"> <StateWise data={stateWiseData} /> </Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
