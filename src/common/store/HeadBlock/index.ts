// import { Actions, ActionTypes, HeadblockState } from './types';
import { Actions, ActionTypes, HeadblockState, HeadblockAction } from './types';
import { Dispatch } from 'redux';

export const initialState: HeadblockState = { 
  head_block_number: '',
  head_block_id: '',
  time:'',
  current_witness:''
};

export default (state: HeadblockState = initialState, action: Actions): HeadblockState => {
  switch (action.type) {
    case ActionTypes.SET_HEAD_BLOCK:
      const { data } = action;
      console.log("-------- SET HEAD BLOCK DATA -----------")
      console.log(data)
      console.log( '----------------------------------------')

      if (data) {
        state = { ...state, ...data };
      }

      return state;
    default:
      return state;
  }
}

/* Actions */
export const setHeadBlockData = (data: HeadblockState) => (dispatch: Dispatch) => {
  dispatch(saveHeadBlock(data));
}

/* Action Creators */
export const saveHeadBlock = (data: HeadblockState): HeadblockAction => ({
  type: ActionTypes.SET_HEAD_BLOCK,
  data
});