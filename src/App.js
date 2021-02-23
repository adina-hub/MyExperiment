import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn } from './components/Pages/SignIn';
import { SignUp } from './components/Pages/SignUp';
import { Home } from './components/Pages/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/" component={Home} exact />
			</Switch>
		</Router>
	);
}

export default App;
