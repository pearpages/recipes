import React from 'react';
import CategoryCard from '../category-card';
import Category from '../../models/category';
import {Link} from 'react-router-dom'
import {categories} from '../../data/data.json';
import CategoriesColumn from '../categories-column';

export default function Home(props) {

    return (<div className="container">
        <div className="row">
            <div className="col-md-3">
                <CategoriesColumn categories={categories}/>
            </div>
            <div className="col-md-9">
                <div className="row">
                {
                    categories.map((cat, i) => <CategoryCard key={i} category={cat} />)
                }
                </div>
            </div>
        </div>
    </div>);

}