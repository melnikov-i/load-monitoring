import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageMenuMultiItem } from '../components';
import { IMenuItem } from '@src/core/interfaces';
import { asyncActionCreators } from '@src/core/redux/page';

interface StateProps {
  isMultiActive: boolean,
  isMenuItemActiveOnSmallScreen: string,
}

interface DispatchProps {
  openSubmenu: (payload: string) => any,
  closeSubmenu: () => any,
}

interface OwnProps {
  params: { item: IMenuItem, index: number }
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const provideActivityForMulti: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    console.warn('pageMenuMultiConnected', props.params.index);
    console.warn('pageMenuMultiConnected', state.page.pageMenuItemMultiActive);
    if (state.page.pageMenuItemMultiActive) {
      return state.page.pageMenuItemMultiActive === '3' + String(props.params.index);
    }
    /** Это убрать. Разобраться со стилями. переименовать pageMenuItems */
    if (state.page.pageMenuItemActive) {
      return state.page.pageMenuItemActive === '3' + String(props.params.index);
    }
    return null;
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isMultiActive: createSelector(provideActivityForMulti, (isActive) => isActive),
    isMenuItemActiveOnSmallScreen: (state: RootState) =>
      state.page.isMenuItemActiveOnSmallScreen,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    openSubmenu: asyncActionCreators.openSubmenu,
    closeSubmenu: asyncActionCreators.closeSubmenu,
  }, dispatch);

export const PageMenuMultiItemConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(PageMenuMultiItem));