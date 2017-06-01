import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from '../../models/recipes';
import RichTextEditor from 'react-rte';
import MyEditor from '../my-editor';

export default class RecipeEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: false }
        Recipes.get(props.match.params.id)
            .then((data) => {
                this.setState({ data: data });
            })
            .catch((err) => {
                // ...
            });
        this.hnadleEditor = this.handleEditor.bind(this);
    }

    handleMaker(field) {
        return (event) => {
            let obj = Object.assign({},this.state.data,{[field]:event.target.value});
            this.setState({ data: obj });
        };
    }

    handleEditor(field) {
        return (value) => {
            let obj = Object.assign({},this.state.data,{[field]:value});
            this.setState({ data: obj });
        }
    }

    render() {

        if (this.state.data) {
            return (<div>
                <input className="form-control" type="text" value={this.state.data.title} onChange={this.handleMaker('title')} />
                <input className="form-control" type="text" value={this.state.data.author} onChange={this.handleMaker('author')} />
                <input className="form-control" type="text" value={this.state.data.assert} onChange={this.handleMaker('assert')} />
                <MyEditor markup={this.state.data.ingredients} onChange={this.handleEditor('ingredients')} />
                <MyEditor markup={this.state.data.description} onChange={this.handleEditor('description')} />
                <button className="btn btn-default" onClick={() => console.log(this.state.data)} >Save</button>
            </div>);

        } else {
            return null;
        }

    }
}