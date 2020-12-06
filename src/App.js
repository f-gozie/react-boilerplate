import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
        	<Header />

        	<Switch>
        		<Route exact path="/">
        			<h1 className="font-bold text-2xl">This is the homepage</h1>
        		</Route>
        		<Route path="/about">
        			<h1 className="font-bold text-2xl">About Us</h1>
        		</Route>
        	</Switch>

	        <Footer />
        </Router>

    </div>
  );
}

export default App;
