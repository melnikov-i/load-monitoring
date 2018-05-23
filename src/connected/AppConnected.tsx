import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import {
  createStructuredSelector,
} from 'reselect';
import { Dispatch, RootState } from '@src/core';
import { withRouter } from 'react-router-dom';

import { App } from '@src/components';

interface StateProps {
  isAuthorized: boolean,
}

interface DispatchProps {}

interface OwnProps {}

const mapStateToProps:
MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isAuthorized: ( state: RootState ) => state.login.isAuthorized,
  });
  
const mapDispatchToProps:
MapDispatchToPropsParam<DispatchProps, OwnProps> = 
  ( dispatch: Dispatch ): DispatchProps => bindActionCreators({
    
  }, dispatch);

export const AppConnected =
  withRouter(connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(App)
  );
