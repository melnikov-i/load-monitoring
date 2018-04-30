import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { createStructuredSelector, Selector } from 'reselect';
import { Dispatch } from '@src/redux';
import { withRouter } from 'react-router-dom';

import { MainHeader } from '@src/components';

import { 
  syncActionCreators
} from '@src/redux/mainHead';

import {
  syncActionCreators as mainActionCreators
} from '@src/redux/main'

import {} from '@src/selectors';

import {
  MainHeaderInterface,
} from '@src/interfaces';

type StateProps = {};

interface DispatchProps {
  mainHeaderButtonSwitch: () => any,
  switchPageMenuItemActive: ( payload: string ) => any
}

interface OwnProps {
  data: MainHeaderInterface,
}

// const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  mainHeaderButtonSwitch: syncActionCreators.mainHeaderButtonSwitch,
  switchPageMenuItemActive: mainActionCreators.switchPageMenuItemActive,
}, dispatch);

export const MainHeaderConnected = 
  withRouter(
    connect<StateProps, DispatchProps, OwnProps>(null, mapDispatchToProps)(MainHeader)
  );