import './App.css';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={SignIn} exact />
				<Route path="/signup" component={SignUp} />
			</Switch>
		</Router>
	);
}

export default App;
