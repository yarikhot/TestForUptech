import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FirstStep from './FirstStep.component';
import { setFirstStep } from './FirstStep.actions';

const mapStateToProps = store => ({
  step1: store.step1,
});

export default withRouter(
  connect(
    mapStateToProps,
    { setFirstStep }
  )(FirstStep)
);
