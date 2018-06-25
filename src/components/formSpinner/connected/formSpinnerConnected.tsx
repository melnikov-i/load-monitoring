import { connect } from 'react-redux';
import { RootState } from '@src/core/redux';
import { FormSpinner } from '../components';

export const FormSpinnerConnected = 
  connect<{}, {}, {}, RootState>(null, {})(FormSpinner);
