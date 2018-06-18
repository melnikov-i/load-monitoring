import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { Input } from '../components';
import { ISAtributes, IDAtributes } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/input';

interface StateProps {}

interface DispatchProps {
  changeInputValue: (payload: any) => any,
}

interface OwnProps {
  dAtributes: IDAtributes,
  sAtributes: ISAtributes,
}

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({});

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeInputValue: syncActionCreators.changeInputValue,
  }, dispatch);

export const InputConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(Input);