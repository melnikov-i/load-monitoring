import { bindActionCreators } from 'redux';
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core';

import { FormInput } from '../components';
import { IFormInputStaticItems, IFormInputDynamicItems } from '../interfaces';
import { syncActionCreators } from '../redux';

interface StateProps {
  dynamicItems: any,
}

interface DispatchProps {
  changeDynamicItemsModel: (payload: IFormInputDynamicItems) => any,
}

interface OwnProps {
  staticItems: IFormInputStaticItems,
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const getItem: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (props.staticItems.id[0] in state.formInput.dynamicItemsModel) {
      if (props.staticItems.id[1] in state.formInput.dynamicItemsModel[props.staticItems.id[0]]) {
        return state.formInput.dynamicItemsModel[props.staticItems.id[0]][props.staticItems.id[1]];
      }
    }
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    dynamicItems: createSelector(getItem, (items) => items),
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    changeDynamicItemsModel: syncActionCreators.changeDynamicItemsModel,
  }, dispatch);

export const FormInputConnected = 
  connect<StateProps, DispatchProps, OwnProps, RootState>(
    mapStateToProps, mapDispatchToProps)(FormInput);
