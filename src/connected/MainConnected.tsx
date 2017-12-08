import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';

import { syncActionCreators, asyncActionCreators } from '@src/redux/main';
import { Main } from '@src/components';

import {
  MainMenuModelSelector,
  isCompositeActiveSelector
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  MainMenuModel: MainMenuModelSelector,
  isCompositeActive: isCompositeActiveSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeMenuRequestToAPI: asyncActionCreators.makeMenuRequestToAPI,
  doCompositeSwitch: syncActionCreators.doCompositeSwitch,
}, dispatch);

export const MainConnected = 
  connect(mapStateToProps, mapDispatchToProps)(Main);  
