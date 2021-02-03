import { IWashingMachineUpdate, IWashingMachine, IWashingMachineCreate } from '../models/WashingMachine';
import ApiRouter from './ApiRouter';

interface IWashingMachineApiResult {
    washingMachines: IWashingMachine[]
}

/** CRUD service for Washing Machine  */
class WashingMachineService {
  /** Get all  Washing Machines */
  static list() {
    return ApiRouter.get<IWashingMachineApiResult>('/washingMachines');
  }

  /** Get  Washing Machine by Id */
  static get(id:string) {
    return ApiRouter.get<IWashingMachine>(`/washingMachines/${id}`);
  }

  /** Create Washing Machine */
  static create(washingMachine: IWashingMachineCreate) {
    return ApiRouter.post<IWashingMachine>('/washingMachines', washingMachine);
  }

  /** Update  Washing Machine */
  static update(washingMachine: IWashingMachineUpdate) {
    return ApiRouter.put<IWashingMachine>('/washingMachines', washingMachine);
  }

  /** Delete Washing Machine */
  static delete(id: string) {
    return ApiRouter.delete<string>(`/washingMachines/${id}`);
  }

  /** Delete Active command from Washing Machine */
  static deleteWork(applianceId: string, commandId: string) {
    return ApiRouter.delete<any>(`/washingMachines/${applianceId}/active.command/${commandId}`);
  }

  /** Add Active Command to  Washing Machine */
  static addWork(applianceId: string, commandId: string) {
    return ApiRouter.post<any>(`/washingMachines/${applianceId}/active.command`, { commandId });
  }
}

export default WashingMachineService;
