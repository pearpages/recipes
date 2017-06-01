import React from 'react'
import RecipiesList from '../recipies-list';
import Recipes from '../../models/recipes.js';

export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        Recipes.getCategory(this.props.match.params.slug)
            .then((data) => {
                this.setState({ data });
            })
            .catch((err) => true);
    }

    render() {
        return (<div className="row">
            {(this.state.data) ? <RecipiesList recipies={this.state.data} /> : 'loading...'}
        </div>);
    }
}
