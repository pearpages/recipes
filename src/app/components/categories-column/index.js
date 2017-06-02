import React from 'react';
import { Link } from 'react-router-dom';
import Recipes from '../../models/recipes';

export default class CategoriesColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] }
        this._renderLinks = this._renderLinks.bind(this);
    }

    componentDidMount() {
        Recipes.getCategories()
            .then((data) => {
                this.setState({ categories: data });
            })
            .catch((err) => console.error(error));
    }

    _renderLinks() {
        return this.state.categories.map((cat, i) => {
            return <li key={i}>
                <Link to={'/category/' + cat.slug}>{cat.name}</Link>
            </li>
        })
    }

    render() {
        return (<ul>
            {
                this._renderLinks()
            }
        </ul>);
    }

}
