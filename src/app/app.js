import ReactDOM from 'react-dom';
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home';
import Category from './components/category';

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
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/category/:slug' component={Category} />
                </Switch>
            </div>
        );


    }
}

ReactDOM.render(<App />, document.getElementById('app'));