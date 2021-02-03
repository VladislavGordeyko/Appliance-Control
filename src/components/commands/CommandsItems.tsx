import React, { useState, useEffect } from 'react';
import CommandsService from '../../api/services/CommandsService';
import { ICommand, ICommandCreate, ICommandUpdate } from '../../api/models/Commans';
import Button from '../common/Button';
import CommandCreateModal from './CommandCreateModal';
import CommandEditModal from './CommandEditModal';

/** Main page of Commands */
const CommandsItems = () => {
  const [commands, setCommands] = useState<ICommand[]>();
  const [isModalCreateShown, setIsModalCreateShown] = useState(false);
  const [isModalEditShown, setIsModalEditShown] = useState(false);
  const [commandToEdit, setCommandToEdit] = useState<ICommand>();

  /** Fetch commands list */
  const getCommands = async () => {
    const res = await CommandsService.list();
    setCommands(res.data.data?.commands);
  };

  /** Send request to add new command */
  const addCommand = async (command: ICommandCreate) => {
    await CommandsService.create(command);
    getCommands();
  };

  /** Send request to edit command */
  const editCommand = async (command: ICommandUpdate) => {
    await CommandsService.update(command);
    getCommands();
  };

  /** Send request to delete command */
  const deleteCommand = async (commandId: string) => {
    await CommandsService.delete(commandId);
    getCommands();
  };

  /** Get commands when component loads */
  useEffect(() => {
    getCommands();
  }, []);

  // useEffect(() => {
  //   if (commandToEdit) {
  //     console.log(commandToEdit);
  //     setIsModalEditShown(true);
  //   }
  // }, [commandToEdit]);

  return (
    <div>
      <CommandCreateModal
        isOpen={isModalCreateShown}
        onClose={() => setIsModalCreateShown(false)}
        onSave={addCommand}
      />
      {commandToEdit && (
      <CommandEditModal
        isOpen={isModalEditShown}
        onClose={() => setIsModalEditShown(false)}
        onSave={editCommand}
        command={commandToEdit}
      />
      )}
      {commands && commands.length > 0 ? commands.map((item, idx) => (
        <div key={idx.toString()} className="bg-gray-50 my-5 py-5 px-32 flex w-full justify-between">
          <div>
            <p className="text-3xl">{item.description}</p>
            <p className="opacity-70">
              {`${item.duratation} mins`}
            </p>
          </div>

          <div className="flex">
            <div className="mr-4">
              <Button
                onClick={() => {
                  setCommandToEdit(item);
                  setIsModalEditShown(true);
                }}
                type="solid"
              >
                Edit
              </Button>
            </div>
            <Button
              onClick={() => deleteCommand(item.id)}
              type="solid"
            >
              Delete
            </Button>
          </div>
        </div>
      )) : (
        <span className="flex justify-center h-24  items-center bg-gray-50">
          You dont have any commands
        </span>
      )}
      <div className="flex justify-center">
        <Button onClick={() => setIsModalCreateShown(true)} type="outline">
          Add Command
        </Button>
      </div>
    </div>
  );
};

export default CommandsItems;
