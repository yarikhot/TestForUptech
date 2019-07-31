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
    const { setData } = this.props;
    setData({ name, value });
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

  handleExit = location => {
    const { reset } = this.props;

    if (location.pathname.includes('help')) {
      reset('card');
      reset('country');
    }
    return location.pathname.includes('secondStep') || 'If you leave this page, your shanges will be lost';
  };

  render() {
    const { country, card } = this.props;
    const { error } = this.state;
    return (
      <div className="page">
        <Prompt when={!!card} message={this.handleExit} />
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
