import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';
import { withRouter } from 'react-router-dom';

import { PageSubmenuItem } from '../components';
import { IMenuItem, ISelectSubmenu } from '@src/core/interfaces';
import { asyncActionCreators } from '@src/core/redux/page';

interface StateProps {
  isActive: boolean,
}

interface DispatchProps {
  closeSubmenu: (payload?: string) => any,
  selectSubmenu: (payload: ISelectSubmenu) => any,
}

interface OwnProps {
  params: { item: IMenuItem, index: number, parent: string }
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const provideSubmenuActivity: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (state.page.pageMenuSimpleItemActive) {
      return state.page.pageMenuSimpleItemActive === '4' + String(props.params.index);
    }
    return null;
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    isActive: createSelector(provideSubmenuActivity, isActive => isActive),
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    closeSubmenu: asyncActionCreators.closeSubmenu,
    selectSubmenu: asyncActionCreators.selectSubmenu
  }, dispatch);

export const PageSubmenuItemConnected = withRouter(
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(PageSubmenuItem));