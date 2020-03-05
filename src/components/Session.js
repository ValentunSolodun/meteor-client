import {store} from "../store";

export const Session = {
  get(name) {
    return store.getState().test[name];
  },
  set(name, obj) {
    store.dispatch({type: 'UPDATE', payload: {name, obj}})
  }
}
