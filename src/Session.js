import {store} from "./store";

export const Session = {
  get(name) {
    return store.getState().main[name];
  },
  set(name, obj) {
    store.dispatch({type: 'UPDATE', payload: {name, obj}})
  }
}

export const getList = () => ([...Session.get("list")]);
export const addTask = title => Session.set("list", [
  ...getList(),
  {id: getList().length + 1, title, checked: false}
]);
export const removeTask = index => Session.set("list", getList().filter((item, i) => i !== index));
export const changeChecked = (index, checked) => {
  console.log(index);
  const store = getList();
  store[index].checked = checked;
  Session.set("list", store);
}
