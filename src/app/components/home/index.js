import React from 'react';
import CategoryCard from '../category-card';
import Category from '../../models/category';
import { Link } from 'react-router-dom'
import CategoriesColumn from '../categories-column';
import Recipes from '../../models/recipes';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] };
        this.processCategories = this.processCategories.bind(this);
    }

    componentDidMount() {
        Recipes.getCategories()
            .then((data) => {
                this.setState({ categories: data });
            })
            .catch((err) => console.error(error));
    }

    processCategories() {
        return this.state.categories.map((cat, i) => <CategoryCard key={i} category={cat} />);
    }

    render() {
        return (
            <div className="row">
                {
                    this.processCategories()
                }
            </div>
        );
    }

}