import { EAddedWorkerActions, AddedWorkerActions } from '../actions/addedWorker.actions';
import { AddedWorkerState, InitialAddedWorkerState } from '../state/addedWorker.state';

export const addedWorkerReducer = (
  state = InitialAddedWorkerState,
  action: AddedWorkerActions
): AddedWorkerState => {
  switch (action.type) {
    case EAddedWorkerActions.AddWorkerSuccess:
      return {
        ...state,
        worker: action.payload
      };
    default:
      return state;
  }
}
