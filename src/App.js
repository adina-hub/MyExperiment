import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn } from './components/Pages/SignIn';
import { SignUp } from './components/Pages/SignUp';
import Home from './components/Pages/Home/Home';
import Experiments from './components/Pages/Experiments/Experiments';
function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/" component={Home} exact />
				<Route path="/experiments" component={Experiments} />
			</Switch>
		</Router>
	);
}

export default App;
