/** Command model */
export interface ICommand {
  /** Id */
  id: string,
  /** Description of command */
  description: string,
  /** Duratation in mins of command */
  duratation: number
}

/** Command model for creation */
export interface ICommandCreate {
  /** Description of command */
  description: string,
  /** Duratation in mins of command */
  duratation: number
}

/** Command model for update */
export interface ICommandUpdate {
   /** Id */
  id: string,
  /** Description of command */
  description?: string,
  /** Duratation in mins of command */
  duratation?: number
}
