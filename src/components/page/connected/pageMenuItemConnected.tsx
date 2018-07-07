import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageMenuItem } from '../components';
import { IMenuItem } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/page';

interface StateProps {
  isActive: boolean,
  isMenuItemActiveOnSmallScreen: string,
}

interface DispatchProps {
  switchPageMenuItemActive: (payload: string) => any,
}

interface OwnProps {
  params: { item: IMenuItem, index: number }
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const provideActivity: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (state.page.pageMenuItemActive) {
      return state.page.pageMenuItemActive === '3' + String(props.params.index)
    }
    return null;
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isActive: createSelector(provideActivity, (isActive) => isActive),
    isMenuItemActiveOnSmallScreen: (state: RootState) => 
      state.page.isMenuItemActiveOnSmallScreen,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> =
  (dispatch: Dispatch) => bindActionCreators({
    switchPageMenuItemActive: syncActionCreators.switchPageMenuItemActive,
  }, dispatch);

export const PageMenuItemConnected =
  withRouter(connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(PageMenuItem)
  );
