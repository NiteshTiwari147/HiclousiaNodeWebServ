import React, { Component } from "react";

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: ''}
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div className="row">
                <form className="col s16" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={ e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder="Password"
                            value={this.state.password}
                            onChange={ e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div className="error" style={{'color': 'red'}}>
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>
                    <button className="btn">{this.props.msg}</button>
                </form>
            </div>
           
        )
    }
}

export default AuthForm;