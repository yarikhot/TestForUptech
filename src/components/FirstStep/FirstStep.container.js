import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FirstStep from './FirstStep.component';
import { setFirstStep } from './FirstStep.actions';
import { reset } from '../../commonActions/commonActions';

const mapStateToProps = store => ({
  card: store.data.card,
  country: store.data.country,
});

export default withRouter(
  connect(
    mapStateToProps,
    { setFirstStep, reset }
  )(FirstStep)
);
