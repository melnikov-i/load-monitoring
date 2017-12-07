import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';




import { /*syncActionCreators,*/ asyncActionCreators } from '@src/redux/main';
import { Main } from '@src/components';

import {
  MainMenuModelSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  MainMenuModel: MainMenuModelSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  makeMenuRequestToAPI: asyncActionCreators.makeMenuRequestToAPI,
}, dispatch);

export const MainConnected = 
  connect(mapStateToProps, mapDispatchToProps)(Main);  
