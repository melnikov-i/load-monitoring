// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { /*Dispatch, */RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

// import {
//   asyncActionCreators
// } from '@src/redux/devices';

import { DevicesLoad } from '@src/components';

import {

} from '@src/interfaces';

import {
  
} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {

  }>({

  });

// const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({

// }, dispatch);

export const DevicesLoadConnected = 
  withRouter(
    connect(mapStateToProps, /*mapDispatchToProps*/{})(DevicesLoad)
  );