import { Action, action } from 'easy-peasy';

export interface TodosModel {
  items: string[];
  addTodo: Action<TodosModel, string>;
}

const todosModel: TodosModel = {
  items: ['Learn', 'Build', 'Win'],

  addTodo: action((state, payload) => {
    state.items.push(payload);
  }),

};

export default todosModel;