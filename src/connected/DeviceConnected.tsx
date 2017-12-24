// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { /*Dispatch,*/ RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

// import {
//   syncActionCreators,
//   asyncActionCreators
// } from '@src/redux/device';

import { Device } from '@src/components';

import {

} from '@src/interfaces';

import {

} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {

}>({

});

// const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({

// }, dispatch);

export const DeviceConnected = 
  withRouter(
    connect(mapStateToProps, {}/*mapDispatchToProps*/)(Device)
  );