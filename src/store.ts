import { createStore } from 'redux';

import { rootReducer, RootState } from '@src/redux';

function confugureStore(initialState?: RootState) {
  return createStore<RootState>(
    rootReducer,
    initialState!,
  );
}

const store = confugureStore();
export default store;