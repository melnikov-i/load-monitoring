import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { InputInitialize } from '../components';
import { IInputAtributes, IFormsModelItem } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/form';

interface StateProps {
  formsModelItem: IFormsModelItem,
}

interface DispatchProps {
  createFormsModelItem: (payload: any) => any,
}

interface OwnProps {
  atributes: IInputAtributes,
}

type Selector<TInput, TOutput> = (state: TInput, props?: any) => TOutput;

/** получает из хранилища данные конкретного поля ввода */
const getFormsModelItem: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (props.atributes.id[0] in state.form.formsModel) {
      if (props.atributes.id[1] in state.form.formsModel[props.atributes.id[0]]) {
        return state.form.formsModel[props.atributes.id[0]][props.atributes.id[1]];
      }
    }
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    formsModelItem: createSelector(getFormsModelItem, (items) => items),
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    createFormsModelItem: syncActionCreators.createFormsModelItem,
  }, dispatch);

export const InputInitializeConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(InputInitialize);
