import React from 'react';
import {Link} from 'react-router-dom';

export default function CategoryCard(props) {

    return (<div className="card col-3 p-4">
            <Link to={"/category/"+props.category.slug}>
            <h4>{props.category.name}</h4>
            <img className="img-thumbnail" src={"/images/categories/"+props.category.image} alt={props.category.name} />
            </Link>
        </div>);

}