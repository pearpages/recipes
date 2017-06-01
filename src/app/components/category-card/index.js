import React from 'react';

export default function CategoryCard(props) {

    return (<div className="card p-4">
            <h4>{props.category.name}</h4>
            <img className="img-thumbnail" src={"/images/categories/"+props.category.image} alt={props.category.name} />
        </div>);

}