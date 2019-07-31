import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SecondStep from './SecondStep.component';
import { setFirstStep } from '../FirstStep/FirstStep.actions';
import { reset } from '../../commonActions/commonActions';

const mapStateToProps = store => ({
  code: store.data.code,
});

export default withRouter(
  connect(
    mapStateToProps,
    { setFirstStep, reset }
  )(SecondStep)
);
