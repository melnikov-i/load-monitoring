import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageSubmenuItem } from '../components';
import { IMenuItem, ISelecSubmenu } from '@src/core/interfaces';
import { asyncActionCreators/* , syncActionCreators */ } from '@src/core/redux/page';

interface StateProps {
  isSubmenuActive: boolean,
  isMenuItemActiveOnSmallScreen: string,
}

interface DispatchProps {
  selectSubmenu: (payload: ISelecSubmenu) => any,
}

interface OwnProps {
  params: { item: IMenuItem, index: number, parent: string }
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const provideSubmenuActivity: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (state.page.pageSubmenuItemActive) {
      return state.page.pageSubmenuItemActive === '4' + String(props.params.index);
    }
    return null;
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isSubmenuActive: createSelector(provideSubmenuActivity, isActive => isActive),
    isMenuItemActiveOnSmallScreen: (state: RootState) => 
      state.page.isMenuItemActiveOnSmallScreen,
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    selectSubmenu: asyncActionCreators.selectSubmenu
  }, dispatch);

export const PageSubmenuItemConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(PageSubmenuItem));