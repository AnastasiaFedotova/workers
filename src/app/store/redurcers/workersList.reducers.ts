import { EWorkersListActions, WorkersListActions } from '../actions/workerList.actions';
import { WorkersListState, InitialWorkersListState } from '../state/workersList.state';

export const workersListReducer = (
  state = InitialWorkersListState,
  action: WorkersListActions
): WorkersListState => {
  switch (action.type) {
    case EWorkersListActions.GetWorkersSuccess:
      return {
        ...state,
        workers: action.payload
      };
    default:
      return state;
  }
}
