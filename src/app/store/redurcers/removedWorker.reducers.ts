import { ERemovedWorkerActions, RemovedWorkerActions } from '../actions/removedWorker.actions';
import { RemovedWorkerState, InitialRemovedWorkerState } from '../state/removedWorker.state';

export const removedWorkerReducer = (
  state = InitialRemovedWorkerState,
  action: RemovedWorkerActions
): RemovedWorkerState => {
  switch (action.type) {
    case ERemovedWorkerActions.RemoveWorkerSuccess:
      return {
        ...state,
        isRemoved: action.payload
      };
    default:
      return state;
  }
}
