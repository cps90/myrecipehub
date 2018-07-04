import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/main/ProtectedRoute';
import Home from './components/Home';
import Category from './components/Category';
import Apps from './components/apps/Apps';
import Breakfast from './components/breakfast/Breakfast';
import Cocktails from './components/cocktails/Cocktails';
import Desserts from './components/desserts/Desserts';
import MainCourse from './components/main/MainCourse';
import SideDishes from './components/sides/SideDishes';
import New from './components/newrecipes/New';
import Login from './components/Login';
import Signup from './components/Signup/index.js';
import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import { verify } from './redux/auth';

class App extends React.Component {
    
    componentDidMount(){  
        this.props.verify();
    }

    render() {
        console.log(this.props)
        const {isAuthenticated, loading} = this.props;
        return (
            <div className="app-wrapper">
                <Navbar />
                {loading ?
                    <div>...Loading user data </div>
                    :
                    <Switch>
                        <Route exact path='/' render={ props => isAuthenticated ? 
                            <Redirect to="/home"/> :
                            <Signup {...props}/> 
                        } />    
                        <Route path='/login' render={ props => isAuthenticated ?
                            <Redirect to="/home"/> :
                            <Login {...props}/> 
                        } />
                        <ProtectedRoute path='/home' component={Home} />
                        <ProtectedRoute path='/category' component={Category} />
                        <ProtectedRoute path='/apps' component={Apps}/>
                        <ProtectedRoute path='/breakfast' component={Breakfast} />
                        <ProtectedRoute path='/cocktails' component={Cocktails} />
                        <ProtectedRoute path='/desserts' component={Desserts} />
                        <ProtectedRoute path='/maincourse' component={MainCourse} />
                        <ProtectedRoute path='/sidedishes' component={SideDishes} />
                        <ProtectedRoute path='/new' component={New} />
                    </Switch>
                }   
            </div>
        )
    }
}

export default withRouter(connect(state => state.auth,{verify})(App));