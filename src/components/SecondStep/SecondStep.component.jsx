import React, { Component } from 'react';

export default class SecondStep extends Component {
  state = {
    code: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ code: value });
  };

  render() {
    const {
      match: {
        params: { country },
      },
    } = this.props;

    return (
      <div className="page">
        <h1 className="title">Step 2</h1>
        <div className="input__box">
          <h2 className="input__title">{country === 'Ukraine' ? 'Postal Code' : 'Zip'}</h2>
          <input onChange={this.handleChange} type="text" />
        </div>
        <button onClick={this.handleSave}>Submit</button>
      </div>
    );
  }
}
