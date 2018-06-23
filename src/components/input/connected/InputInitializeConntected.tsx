import { bindActionCreators } from 'redux';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from 'react-redux';
import { createStructuredSelector, createSelector } from 'reselect';
import { Dispatch, RootState } from '@src/core/redux';

import { InputInitialize } from '../components';
import { ISAtributes, IDAtributes } from '@src/core/interfaces';
import { syncActionCreators } from '@src/core/redux/form';

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

/** получает из хранилища данные конкретного поля ввода */
const getFormItem: Selector<RootState, any> =
  (state: RootState, props: OwnProps): any => {
    if (props.sAtributes.id[0] in state.form.formsModel) {
      if (props.sAtributes.id[1] in state.form.formsModel[props.sAtributes.id[0]]) {
        return state.form.formsModel[props.sAtributes.id[0]][props.sAtributes.id[1]];
      }
    }
  }

const mapStateToProps:
  MapStateToPropsParam<StateProps, OwnProps, RootState> =
  createStructuredSelector<RootState, StateProps>({
    dAtributes: createSelector(getFormItem, (items) => items),
  });

const mapDispatchToProps:
  MapDispatchToPropsParam<DispatchProps, OwnProps> = (dispatch: Dispatch) => bindActionCreators({
    createDAtributes: syncActionCreators.createFormsModelItem,
  }, dispatch);

export const InputInitializeConnected =
  connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(InputInitialize);
