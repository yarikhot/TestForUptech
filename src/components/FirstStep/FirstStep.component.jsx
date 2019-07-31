import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import { routes } from '../../config/routes';

class FirstStep extends Component {
  handleChange = ({ target: { name, value } }) => {
    const { setFirstStep } = this.props;
    setFirstStep({ name, value });
  };

  handleSave = () => {
    const {
      country,
      history: { push },
    } = this.props;

    push(`${routes.secondStep_panh_name}/${country}`);
  };

  render() {
    const { country, card } = this.props;
    return (
      <div className="page">
        <h1 className="title">Step 1</h1>
        <div className="inputBox">
          <h2 className="input__title">Card Number</h2>
          <InputMask
            {...this.props}
            mask="9999 9999 9999 9999"
            maskChar=" "
            value={card}
            name="card"
            onChange={this.handleChange}
          />
        </div>
        <div className="inputBox">
          <h2 className="input__title">Select country</h2>
          <select value={country} name="country" id="1" onChange={this.handleChange}>
            <option value="Ukraine">Ukraine</option>
            <option value="United States">United States</option>
          </select>
        </div>
        <button onClick={this.handleSave}>Next Step</button>
      </div>
    );
  }
}

export default FirstStep;
