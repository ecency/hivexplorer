import { bindActionCreators, Dispatch } from 'redux';
import { History, Location } from 'history';
import { AppState } from '../store';
import { Global } from '../store/global/types';

export interface PageProps {
  history: History;
  location: Location;
  global: Global;
}

export const pageMapStateToProps = (state: AppState) => ({
  ...state
});

export const pageMapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {},
    dispatch
  );
