import ReactDOM from 'react-dom';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home';
import Category from './components/category';
import data from '../data/data.json';
import CategoriesColumn from './components/categories-column';
import Recipe from './components/recipe';

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
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                    </ul>
                </nav>
                <div className="row">
                    <div className="col-md-3">
                        <CategoriesColumn categories={data.categories} />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path='/' component={(props) => <Home data={data} />} />
                            <Route path='/category/:slug' component={(props) => <Category {...props} />} />
                            <Route path='/recipe/:id' component={(props) => <Recipe {...props} />} />
                        </Switch>
                    </div>
                </div>
            </div>
        );


    }
}

ReactDOM.render(<App />, document.getElementById('app'));