import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Apps from './components/apps/Apps';
import Breakfast from './components/breakfast/Breakfast';
import Cocktails from './components/cocktails/Cocktails';
import Desserts from './components/desserts/Desserts';
import MainCourse from './components/main/MainCourse';
import SideDishes from './components/sides/SideDishes';
import New from './components/newrecipes/New';


class App extends React.Component {

    render() {
        
        return (
            <div>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/category' component={Category} />
                    <Route path='/apps' component={Apps}/>
                    <Route path='/breakfast' component={Breakfast} />
                    <Route path='/cocktails' component={Cocktails} />
                    <Route path='/desserts' component={Desserts} />
                    <Route path='/maincourse' component={MainCourse} />
                    <Route path='/sidedishes' component={SideDishes} />
                    <Route path='/new' component={New} />
                </Switch>

            </div>
        )
    }
}

export default App