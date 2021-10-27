import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Donate from './components/Donate/Donate';
import Home from './components/Home/Home';
import About from './components/About/About';
import Event from './components/Event/Event';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Admin from './components/Admin/Admin';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>
            <PrivateRoute path='/donate-now'>
              <Donate></Donate>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/event'>
              <Event></Event>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
