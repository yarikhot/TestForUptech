import React, { Component } from 'react';
import { routes } from '../../config/routes';
import { Prompt } from 'react-router-dom';
import Header from '../Header/Header';

export default class SecondStep extends Component {
  state = {
    error: '',
    nextRoute: '',
  };

  handleChange = ({ target: { value, name } }) => {
    const { setData } = this.props;
    setData({ value, name });
  };

  handleSubmit = () => {
    const {
      history: { push },
      code,
    } = this.props;

    if (!!code) {
      push(routes.successful);
    } else {
      this.setState({ error: 'This field don`t be empty' });
    }
  };

  handleExit = location => {
    const { reset } = this.props;

    if (!location.pathname.includes('tykrasava')) {
      reset('code');
    }
    return location.pathname.includes('tykrasava') || 'If you leave this page, your shanges will be lost';
  };

  render() {
    const {
      match: {
        params: { country },
      },
      code,
    } = this.props;
    const { error } = this.state;
    return (
      <div className="page">
        <Prompt when={!!code} message={this.handleExit} />
        <Header />
        <h1 className="title">Step 2</h1>
        <div className="input__box">
          <h2 className="input__title">{country === 'Ukraine' ? 'Postal Code' : 'Zip'}</h2>
          <input name="code" onChange={this.handleChange} value={code} type="text" />
          <p style={{ color: 'red' }}>{error}</p>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
