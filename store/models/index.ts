import todosModel, { TodosModel } from './todos';
//import auditModel, { AuditModel } from './audit';

export interface StoreModel {
  todos: TodosModel;
  //audit: AuditModel;
}

const storeModel: StoreModel = {
  todos: todosModel,
  //audit: auditModel,
};

export default storeModel;