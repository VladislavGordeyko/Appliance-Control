import { ICommand, ICommandCreate, ICommandUpdate } from '../models/Commans';
import ApiRouter from './ApiRouter';

interface ICommandApiResult {
    commands: ICommand[]
}

/** CRUD service for Commands  */
class CommandsService {
  /** Get all commands */
  static list() {
    return ApiRouter.get<ICommandApiResult>('/commands');
  }

  /** Get command by id */
  static get(id:string) {
    return ApiRouter.get<ICommand>(`/commands/${id}`);
  }

  /** Create command */
  static create(command: ICommandCreate) {
    return ApiRouter.post<ICommand>('/commands', command);
  }

  /** Update command */
  static update(washingMachine: ICommandUpdate) {
    return ApiRouter.put<ICommand>('/commands', washingMachine);
  }

  /** Delete command */
  static delete(id: string) {
    return ApiRouter.delete<string>(`/commands/${id}`);
  }
}

export default CommandsService;
