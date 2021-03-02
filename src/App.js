import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/Pages/SignIn/SignIn';
import SignUp from './components/Pages/SignUp/SignUp';
import Home from './components/Pages/Home/Home';
import Experiments from './components/Pages/Experiments/Experiments';
import AdminHome from './components/Pages/Admin/Admin';
import AdminExperiments from './components/Pages/Admin/AdminExperiments';
import AdminEvents from './components/Pages/Admin/AdminEvents';
import Events from './components/Pages/Events/Events';
import Event from './components/Pages/Events/Event/Event';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/" component={Home} exact />
				<Route path="/experiments" component={Experiments} exact />
				<Route path="/experiments/:id" component={Experiments} />
				<Route path="/events" component={Events} exact />
				<Route path="/events/:id" component={Event} />
				<Route path="/admin" component={AdminHome} />
				<Route path="/experimentsList" component={AdminExperiments} />
				<Route path="/eventsList" component={AdminEvents} />
			</Switch>
		</Router>
	);
}

export default App;
