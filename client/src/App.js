import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Recipe from './components/Recipe';
import Apps from './components/Apps';
import Breakfast from './components/Breakfast';
import Cocktails from './components/Cocktails';
import Desserts from './components/Desserts';
import MainCourse from './components/MainCourse';
import SideDishes from './components/SideDishes';
import { connect } from 'react-redux';


class App extends React.Component {

    render() {
        
        return (
            <div>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/category' component={Category} />
                    <Route path='/recipe' component={Recipe} />
                    <Route path='/apps' component={Apps}/>
                    <Route path='/breakfast' component={Breakfast} />
                    <Route path='/cocktails' component={Cocktails} />
                    <Route path='/desserts' component={Desserts} />
                    <Route path='/maincourse' component={MainCourse} />
                    <Route path='/sidedishes' component={SideDishes} />
                </Switch>

            </div>
        )
    }
}

export default connect(state => state)(App)