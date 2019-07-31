import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SecondStep from './SecondStep.component';
import { setCode } from './SecondStep.actions';
import { reset } from '../../commonActions/commonActions';

const mapStateToProps = store => ({
  firstStep: store.data,
});

export default withRouter(
  connect(
    mapStateToProps,
    { setCode, reset }
  )(SecondStep)
);
