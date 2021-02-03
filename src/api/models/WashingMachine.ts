import { ApplianceStatus, ApplianceStatusCreate } from '../enums';
import { IActiveCommand } from './ActiveCommand';

/** Washing machine model */
export interface IWashingMachine {
    /** Id */
    id: string,
    /** Creation date */
    createdAt: string | Date,
    /** Washing machine name */
    name: string,
    /** Current status of washing machine */
    status: ApplianceStatus,
    /** Active Commands  */
    activeCommands: IActiveCommand[]
}

/** Washing machine create model */
export interface IWashingMachineCreate {
    /** Washing machine name */
    name: string,
     /** Current status of washing machine */
    status?: ApplianceStatusCreate,
}

/** Washing machine update model */
export interface IWashingMachineUpdate {
    /** Id */
    id: string,
    /** Washing machine name */
    name?: string,
    /** Current status of washing machine */
    status?: ApplianceStatus | ApplianceStatusCreate,
     /** Active Commands  */
    activeCommands?: IActiveCommand[]
}
