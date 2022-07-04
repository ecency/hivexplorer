import {Dispatch} from "redux";

import {Actions, ActionTypes, Subscription, UpdateAction} from "./types";

export const initialState: Subscription[] = [];

export default (state: Subscription[] = initialState, action: Actions): Subscription[] => {
    switch (action.type) {
        case ActionTypes.UPDATE:
            return [...action.list]
        default:
            return state;
    }
}

/* Actions */
export const updateSubscriptions = (list: Subscription[]) => (dispatch: Dispatch) => {
    dispatch(updateAct(list));
};

/* Action Creators */
export const updateAct = (list: Subscription[]): UpdateAction => {
    return {
        type: ActionTypes.UPDATE,
        list,
    };
};
