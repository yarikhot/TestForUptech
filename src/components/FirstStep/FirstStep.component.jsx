import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { routes } from '../../config/routes';
import Header from '../Header/Header';

class FirstStep extends Component {
  state = {
    error: '',
    nextRoute: '',
  };

  handleChange = ({ target: { name, value } }) => {
    const { setFirstStep } = this.props;
    setFirstStep({ name, value });
  };

  handleSave = () => {
    const {
      country,
      history: { push },
      card,
    } = this.props;

    if (card.replace(/ /g, '').length === 16) {
      push(`${routes.secondStep_panh_name}/${country}`);
    } else {
      this.setState({ error: 'Please, enter correcr card number' });
    }
  };

  componentWillUnmount() {
    const { reset } = this.props;
    const { nextRoute } = this.state;
    if (nextRoute.includes('secondStep')) reset('card');
  }

  render() {
    const { country, card } = this.props;
    const { error } = this.state;
    return (
      <div className="page">
        <Prompt
          when={!!card}
          message={location => {
            this.setState({ nextRoute: location.pathname });
            return location.pathname.includes('secondStep') || 'If you leave this page, your shanges will be lost';
          }}
        />
        <Header />
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
          <p style={{ color: 'red' }}>{error}</p>
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
