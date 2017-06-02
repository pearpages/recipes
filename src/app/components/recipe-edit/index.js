import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from '../../models/recipes';
import RichTextEditor from 'react-rte';
import MyEditor from '../my-editor';

export default class RecipeEdit extends React.Component {

    constructor(props) {
        super(props);
        this.handleEditor = this.handleEditor.bind(this);
        this.save = this.save.bind(this);

        let id = (this.props.new) ? 'new' : this.props.match.params.id;
        this.state = { data: false, categories: [], id: id, type: (id === 'new') ? 'post' : 'put' };
    }

    componentDidMount() {
        const pr = Promise.all([
            Recipes.get(this.state.id),
            Recipes.getCategories()
        ]).then((values) => {
            console.log(values[1]);
            this.setState({ data: values[0], categories: values[1] });
        })
            .catch(err => console.log(err));
    }

    handleMaker(field) {
        return (event) => {
            let obj = Object.assign({}, this.state.data, { [field]: event.target.value });
            this.setState({ data: obj });
        };
    }

    handleEditor(field) {
        return (value) => {
            let obj = Object.assign({}, this.state.data, { [field]: value });
            this.setState({ data: obj });
        }
    }

    save() {
        Recipes.save(this.state.type, this.state.data)
            .then((data) => {
                alert('saved');
            });
    }

    render() {

        if (this.state.data) {
            return (<div>
                <select className="form-control" value={this.state.data.category} onChange={this.handleMaker('category')}>
                    {this.state.categories.map((cat, i) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                </select>
                <input placeholder="title" className="form-control" type="text" value={this.state.data.title} onChange={this.handleMaker('title')} />
                <input placeholder="author" className="form-control" type="text" value={this.state.data.author} onChange={this.handleMaker('author')} />
                <input placeholder="assert" className="form-control" type="text" value={this.state.data.assert} onChange={this.handleMaker('assert')} />
                <MyEditor markup={this.state.data.ingredients} onChange={this.handleEditor('ingredients')} />
                <MyEditor markup={this.state.data.description} onChange={this.handleEditor('description')} />
                <button className="btn btn-default" onClick={this.save} >Save</button>
            </div>);

        } else {
            return null;
        }

    }
}