import React from 'react'

export default class Category extends React.Component {

    componentDidMount() {
    }

    render () {
        return (<div>Category
            {this.props.match.params.slug}
        </div>);
    }
}