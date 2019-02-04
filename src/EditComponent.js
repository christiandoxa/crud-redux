import React, {Component} from 'react';
import {connect} from 'react-redux';

const initialState = {
    title: '',
    message: ''
};

class EditComponent extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = this.state.title;
        const message = this.state.message;
        const data = {
            newTitle: title,
            newMessage: message
        };
        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.post.id,
            data
        });
        this.setState(initialState);
    }

    render() {
        return (
            <div>
                <br/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        value={this.state.title}
                        required
                        type="text"
                        placeholder="Enter Post Title"
                        onChange={e => this.setState({title: e.target.value})}/>
                    <br/><br/>
                    <textarea
                        value={this.state.message}
                        id="message"
                        required
                        rows="5" cols="28"
                        placeholder="Enter Post"
                        onChange={e => this.setState({message: e.target.value})}/>
                    <br/><br/>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);