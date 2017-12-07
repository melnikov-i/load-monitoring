import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from '@src/redux';




import { /*syncActionCreators,*/ asyncActionCreators } from '@src/redux/spinner';
import { Spinner } from '@src/components';

import {
  CircularSpinnerModelSelector,
} from '@src/selectors';

const mapStateToProps = createStructuredSelector({
  CircularSpinnerModel: CircularSpinnerModelSelector,
});

const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators({
  doDeferredIncrementOfBeforeValue: asyncActionCreators.doDeferredIncrementOfBeforeValue
}, dispatch);

export const SpinnerConnected = 
  connect(mapStateToProps, mapDispatchToProps)(Spinner);  