import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { Submit } from '../components';
import { IFormsModelItem, ISubmitParams } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/form';

interface StateProps {
  formsModelPart: IFormsModelItem,
}

interface DispatchProps {
  validateFormsModelItem: (payload: any) => any,
}

interface OwnProps {
  params: ISubmitParams;
  callback: (items: any) => any,
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

const getFormsModelItem: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    return state.form.formsModel[props.params.formName]
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    formsModelPart: createSelector(getFormsModelItem, (item) => item),
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    validateFormsModelItem: syncActionCreators.validateFormsModelItem,
  }, dispatch);

export const SubmitConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(Submit);