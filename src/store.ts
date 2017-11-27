import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, RootState } from '@src/redux';

function confugureStore(initialState?: RootState) {
  return createStore<RootState>(
    rootReducer,
    initialState!,
    applyMiddleware(thunk),
  );
}

const store = confugureStore();
export default store;