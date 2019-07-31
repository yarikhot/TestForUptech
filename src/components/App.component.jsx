import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import FirstStep from './FirstStep/FirstStep.container';
import SecondStep from './SecondStep/SecondStep.container';
import Help from './Help/Help';
import Successful from './Successful/Successful';
import { routes } from '../config/routes';

class App extends PureComponent {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="App">
        <Switch>
          <Route exact path={routes.firstStep} component={FirstStep} />
          <Route exact path={routes.secondStep} component={SecondStep} />
          <Route exact path={routes.help} component={Help} />
          <Route exact path={routes.successful} component={Successful} />
          <Redirect to={routes.firstStep} />
        </Switch>
      </div>
    );
  }
}

export default App;
