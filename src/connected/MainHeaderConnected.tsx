import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/redux';
import { withRouter } from 'react-router-dom';

import { MainHeader } from '@src/components';

import { 
  syncActionCreators
} from '@src/redux/mainHead';

import {
  syncActionCreators as mainActionCreators
} from '@src/redux/main'

import {} from '@src/selectors';

const mapStateToProps = createStructuredSelector<RootState, {}>({});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  mainHeaderButtonSwitch: syncActionCreators.mainHeaderButtonSwitch,
  switchPageMenuItemActive: mainActionCreators.switchPageMenuItemActive,
}, dispatch);

export const MainHeaderConnected = 
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MainHeader) as any
  );