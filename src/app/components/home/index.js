import React from 'react';
import CategoryCard from '../category-card';
import Category from '../../models/category';
import { Link } from 'react-router-dom'
import CategoriesColumn from '../categories-column';

export default function Home(props) {

    return (
        <div className="row">
            {
                props.data.categories.map((cat, i) => <CategoryCard key={i} category={cat} />)
            }
        </div>
    );

}