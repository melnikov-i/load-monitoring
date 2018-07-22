import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageMenuSimpleItem } from '../components';
import { IMenuItem } from '@src/core/interfaces';
import { asyncActionCreators } from '@src/core/redux/page';

interface StateProps {
  isSimpleMenuItemActive: boolean,  
  isSubmenuActiveOnBigScreen: boolean,
  isSubmenuActiveOnSmallScreen: boolean,
}

interface DispatchProps {
  selectSimpleItemMainMenu: (payload: string) => any,  
}

interface OwnProps {
  params: { item: IMenuItem, index: number }
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const provideActivity: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (state.page.pageMenuSimpleItemActive) {
      return state.page.pageMenuSimpleItemActive === '3' + String(props.params.index)
    }
    return null;
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isSimpleMenuItemActive: createSelector(provideActivity, (isActive) => isActive),    
    isSubmenuActiveOnBigScreen: (state: RootState) =>
      state.page.isSubmenuActiveOnBigScreen,
    isSubmenuActiveOnSmallScreen: (state: RootState) =>
      state.page.isSubmenuActiveOnSmallScreen,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    selectSimpleItemMainMenu: asyncActionCreators.selectSimpleItemMainMenu,    
  }, dispatch);

export const PageMenuSimpleItemConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(PageMenuSimpleItem));
