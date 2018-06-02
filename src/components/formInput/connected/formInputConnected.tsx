import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { FormInput } from '../components';
import { IFormInputItems, IFormInputChangeValue } from '../interfaces';
import { syncActionCreators } from '../redux';

interface StateProps {
  value: string;
  validation: string,
}

interface DispatchProps {
  changeValue: (payload: IFormInputChangeValue) => any,
}

interface OwnProps {
  formInputItems: IFormInputItems,
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const getValue: Selector<RootState, string> =
  (state: RootState, props: OwnProps): string => 
    state.formInput
      .values[props.formInputItems.storeContext[0]][props.formInputItems.storeContext[1]];

const getValidation: Selector<RootState, string> = 
  (state: RootState, props: OwnProps): string =>
    state.registration
      .validation[props.formInputItems.storeContext[0]][props.formInputItems.storeContext[1]];


const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    value: createSelector(getValue, ( valueItem ) => valueItem),
    validation: createSelector(getValidation, ( validation ) => validation),
  });


const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeValue: syncActionCreators.changeValue,
  }, dispatch);

export const FormInputConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(FormInput);
