import { CommandStatus } from '../enums';
import { ICommand } from './Commans';

/** Active command model */
export interface IActiveCommand {
  /** id */
  id: string,
  /** Command */
  command: ICommand,
  /** Command should start at  */
  startAt: Date,
  /** Command should finish at  */
  finishAt: Date,
  /** Current command status */
  status: CommandStatus
}
