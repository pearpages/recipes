import React from 'react'
import RecipiesList from '../recipies-list';

export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        fetch('http://localhost:3000/'+this.props.match.params.slug)
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                this.setState({data});
            });
    }

    render () {
        return (<div className="row">
            {(this.state.data) ? <RecipiesList recipies={this.state.data}/>: 'loading...'}
        </div>);
    }
}
