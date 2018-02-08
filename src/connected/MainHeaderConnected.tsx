import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import { MainHeader } from '@src/components';


const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({

}, dispatch);

export const MainHeaderConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MainHeader)
  );