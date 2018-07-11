import { bindActionCreators } from 'redux';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageRouter } from '../components';
import { syncActionCreators } from '@src/core/redux/page';

interface DispatchProps {
  switchPageMenuSimpleItemActive: (payload: string) => any,
}

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, {}> = (dispatch: Dispatch) => 
  bindActionCreators({
    switchPageMenuSimpleItemActive: syncActionCreators.switchPageMenuSimpleItemActive,
  }, dispatch);

export const PageRouterConnected = withRouter(
  connect<null, DispatchProps, {}, RootState>(null, mapDispatchToProps)(PageRouter));