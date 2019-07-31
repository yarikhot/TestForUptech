import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SecondStep from './SecondStep.component';
import { setData } from '../FirstStep/FirstStep.actions';
import { reset } from '../../commonActions/commonActions';

const mapStateToProps = store => ({
  code: store.data.code,
});

export default withRouter(
  connect(
    mapStateToProps,
    { setData, reset }
  )(SecondStep)
);
