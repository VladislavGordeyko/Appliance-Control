/* eslint-disable no-shadow */
/** Appliance State */
export enum ApplianceStatus {
    WORKING = 'WORKING',
    IDLE = 'IDLE',
    OFFLINE = 'OFFLINE'
}

/** Appliance State Create */
export enum ApplianceStatusCreate {
    IDLE = 'IDLE',
    OFFLINE = 'OFFLINE'
}

/** Command State */
export enum CommandStatus {
    INPROCESS = 'INPROCESS',
    FINISHED = 'FINISHED'
}
