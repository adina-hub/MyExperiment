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
import NewExperiment from './components/Pages/Admin/NewExperiment';
import NewEvent from './components/Pages/Admin/NewEvent';
import User from './components/Pages/User/User';
import Event from './components/Pages/Events/Event/Event';
import UserExperiments from './components/Pages/User/UserExperiments';
import UserEvents from './components/Pages/User/UserEvents';
import { AuthProvider } from './context/AuthContext';
import Experiment from './components/Pages/Experiments/Experiment/Experiment';
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute';
function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<Route path="/signIn" component={SignIn} />
					<Route path="/signUp" component={SignUp} />
					<Route path="/" component={Home} exact />
					<Route path="/experiments" component={Experiments} exact />
					<Route path="/experiments/:id" component={Experiment} />
					<Route path="/events" component={Events} exact />
					<Route path="/events/:id" component={Event} />
					<AdminRoute path="/admin" exact component={AdminHome} />
					<AdminRoute path="/admin/experiments" exact component={AdminExperiments} />
					<AdminRoute path="/admin/experiments/:id" component={NewExperiment} />
					<AdminRoute path="/admin/events" exact component={AdminEvents} />
					<AdminRoute path="/admin/events/:id" component={NewEvent} />
					<AdminRoute path="/admin/experiments/new" component={NewExperiment} />
					<AdminRoute path="/admin/events/new" component={NewEvent} />
					<UserRoute path="/user" exact component={User} />
					<UserRoute path="/user/experiments" component={UserExperiments} />
					<UserRoute path="/user/events" component={UserEvents} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
