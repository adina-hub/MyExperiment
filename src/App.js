import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { Navbar } from './components/Navbar';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<Route path="/" component={Navbar} exact />
			</Switch>
		</Router>
	);
}

export default App;
