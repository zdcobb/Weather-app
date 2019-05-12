import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            station: '',
            errors: []
        };
    }
    componentDidMount() {
        this.setState({station: ''})
    }

    handleChange = (event) => {
        this.setState({ station: event.target.value });
    }

    handleSubmit = (event) => {
        this.props.fetchData(this.state.station);
        event.preventDefault();
    }

    render() {
        return (
            <div className="landing">
                <header>
                    <h1 className="title">How's the Weather?</h1>
                </header>

                <section>
                    <form name="landing-form" className="form form--centered" onSubmit={this.handleSubmit}>
                        <div className="input-group input-group--column">
                            <label className="input-group__label">Enter a Station ID</label>
                            <input type="text" className="input-group__input" pattern="[a-zA-Z]{4}" value={this.state.station} onChange={this.handleChange} />
                            {this.state.errors.map((error) => {
                                return (<label className="input-group__errorMsg">{error}</label>);
                            })}
                        </div>
                        <input type="submit" className="btn" value="Submit" />
                    </form>
                </section>
            </div>
        )
    }
}

export default Landing;