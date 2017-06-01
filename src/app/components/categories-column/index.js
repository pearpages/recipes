import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoriesColumn(props) {

    return (<ul>
        {
            props.categories.map((cat, i) => {
                return <li key={i}>
                    <Link to={'/category/' + cat.slug}>{cat.name}</Link>
                </li>
            })
        }
    </ul>);

}
