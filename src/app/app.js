import ReactDOM from 'react-dom';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home';
import Category from './components/category';
import CategoriesColumn from './components/categories-column';
import Recipe from './components/recipe';
import RecipeEdit from './components/recipe-edit';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        );
    }
}

export class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/recipe/new'>New</Link></li>
                    </ul>
                </nav>
                <div className="row">
                    <div className="col-md-3">
                        <CategoriesColumn />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/category/:slug' component={(props) => <Category {...props} />} />
                            <Route exact path='/recipe/new' component={(props) => <RecipeEdit new={true} {...props} />} />
                            <Route exact path='/recipe/:id' component={(props) => <Recipe {...props} />} />
                            <Route path='/recipe/:id/edit' component={(props) => <RecipeEdit {...props} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );


    }
}

ReactDOM.render(<App />, document.getElementById('app'));