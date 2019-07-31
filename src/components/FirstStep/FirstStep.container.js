import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FirstStep from './FirstStep.component';
import { setData } from './FirstStep.actions';
import { reset } from '../../commonActions/commonActions';

const mapStateToProps = store => ({
  card: store.data.card,
  country: store.data.country,
});

export default withRouter(
  connect(
    mapStateToProps,
    { setData, reset }
  )(FirstStep)
);
