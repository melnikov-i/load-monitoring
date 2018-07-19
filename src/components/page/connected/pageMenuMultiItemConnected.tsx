import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageMenuMultiItem } from '../components';
import { IMenuItem } from '@src/core/interfaces';
import { asyncActionCreators } from '@src/core/redux/page';

interface StateProps {
  isMultiMenuItemActiveOnBigScreen: boolean,
  isMultiMenuItemActiveOnSmallScreen: boolean,
  isSubmenuActiveOnSmallScreen: boolean,
  isSubmenuActiveOnBigScreen: boolean,
}

interface DispatchProps {
  openSubmenu: (payload: string) => any,
  closeSubmenu: (payload?: string) => any,
}

interface OwnProps {
  params: { item: IMenuItem, index: number }
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const provideActivityForMultiOnBigScreen: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (state.page.pageMenuItemMultiActiveOnBigScreen) {
      return state.page.pageMenuItemMultiActiveOnBigScreen === '3' + String(props.params.index);
    }
    return null;
  };

const provideActivityForMultiOnSmallScreen: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (state.page.pageMenuItemMultiActiveOnSmallScreen) {
      return state.page.pageMenuItemMultiActiveOnSmallScreen === '3' + String(props.params.index);
    }
    return null;
  };

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isMultiMenuItemActiveOnBigScreen: createSelector(
      provideActivityForMultiOnBigScreen, (isActive) => isActive),
    isMultiMenuItemActiveOnSmallScreen: createSelector(
      provideActivityForMultiOnSmallScreen, (isActive) => isActive),
    isSubmenuActiveOnSmallScreen: (state: RootState) => 
      state.page.isSubmenuActiveOnSmallScreen,
    isSubmenuActiveOnBigScreen: (state: RootState) => 
      state.page.isSubmenuActiveOnBigScreen
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    openSubmenu: asyncActionCreators.openSubmenu,
    closeSubmenu: asyncActionCreators.closeSubmenu,
  }, dispatch);

export const PageMenuMultiItemConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(PageMenuMultiItem));