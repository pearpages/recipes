import React from 'react';
import RichTextEditor from 'react-rte';

export default class MyEditor extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.markup) {
            this.state = {
                value: RichTextEditor.createValueFromString(this.props.markup,'html')
            };
        } else {
            this.state = {
                value: RichTextEditor.createEmptyValue()
            };
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(value.toString('html'));
        }
    }

    render() {
        return (
            <RichTextEditor
                value={this.state.value}
                onChange={this.onChange}
            />
        );
    }
}