import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: ""
        };
    }

    componentDidMount() {
        console.log('Rendered Form');
    }

    componentDidUpdate() {
        console.log('Title Changed');
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleSubmit = (e) => {
        const { title } = this.state;
        e.preventDefault();
        this.setState({ globalTitle: `title: ${title}` });
        this.setState({ title: "" });
    }

    render() {
        const { title, globalTitle } = this.state;
        return (
            <div>
                <form>
                    <input type="text" value={title} onChange={this.handleChange} />
                    <input type="submit" value="validade title" onClick={this.handleSubmit} />
                </form>
                <h3>{globalTitle}</h3>
            </div>
        );
    }
}

export default Form;
