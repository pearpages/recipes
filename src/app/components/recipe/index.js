import React from 'react';
import Recipes from '../../models/recipes';
import {Link} from 'react-router-dom';

export default class Recipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: undefined }
        Recipes.get(props.match.params.id)
            .then((data) => {
                this.setState({ data });
            })
            .catch((err) => {
                // ...
            });
    }

    render() {
        const r = this.state.data;
        return (<div>
            {(r) ? <div>
                <h3>{r.title} ({r.id})</h3>
                <Link className="btn btn-default" to={"/recipe/"+r.id+"/edit"}>Edit</Link>
                <div>{r.author}</div>
                <img src={"/images/recipies/"+r.picture} alt={r.title} />
                <h4>Descripción</h4>
                <div>{r.assert}</div>
                <h4>Ingredienets</h4>
                <div dangerouslySetInnerHTML={{__html: r.ingredients}}></div>
                <h4>Preparación</h4>
                <div dangerouslySetInnerHTML={{__html: r.description}}></div>
            </div>
                : 'Not Found'}
        </div>);
    }

}