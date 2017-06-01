import React from 'react';
import {Link} from 'react-router-dom';

export default function RecipiesList(props) {

    return (<ul>
        {props.recipies.map( (re,i) => {
            return <li key={i} >
                <Link to={"/recipe/"+re.id}>{re.title}</Link>
            </li>
        })}
    </ul>);

}