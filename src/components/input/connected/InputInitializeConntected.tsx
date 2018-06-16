import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { InputInitialize } from '../components';
import { ISAtributes, IDAtributes } from '../interfaces';
import { syncActionCreators } from '../redux';

interface StateProps {
  dAtributes: IDAtributes,
}

interface DispatchProps {
  createDAtributes: (payload: any) => any,
}

interface OwnProps {
  sAtributes: ISAtributes,
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const getAtributes: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (props.sAtributes.id[0] in state.input.dAtributesModel) {
      if (props.sAtributes.id[1] in state.input.dAtributesModel[props.sAtributes.id[0]]) {
        return state.input.dAtributesModel[props.sAtributes.id[0]][props.sAtributes.id[1]];
      }
    }
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    dAtributes: createSelector(getAtributes, (items) => items),
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    createDAtributes: syncActionCreators.createDAtributes,
  }, dispatch);

export const InputInitializeConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(InputInitialize);
