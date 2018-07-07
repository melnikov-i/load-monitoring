import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageMenuItem } from '../components';
import { IMenuItem } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/page';

interface StateProps {
  pageMenuItemActive: string,
  isActive: boolean,
  style: any,
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
    return state.page.pageMenuItemActive === String(props.params.index);
  }

const selectStyle: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (state.page.pageMenuItemActive === String(props.params.index)) {
      return {
        color: '#fff',
        backgroundColor: '#293846',
        borderLeft: '4px solid #19aa8d',
        transition: 'border-left 0.4s',
      };
    } else {
      return {};
    }
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    pageMenuItemActive: (state: RootState) => state.page.pageMenuItemActive,
    isActive: createSelector(provideActivity, (isActive) => isActive),
    style: createSelector(selectStyle, (style) => style),
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
