import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { ICommand } from '../../api/models/Commans';
import CommandsService from '../../api/services/CommandsService';
import Button from '../common/Button';
import Modal from '../common/Modal';

/** Interface for component */
interface ICommandsModal {
   /** Function on modal close */
   onClose: () => void;

   /** Is modal open */
   isOpen: boolean

   /** Function on save */
   onSave: (comamnd: string) => void;
}

/** Modal for pick command */
const CommandsModal = ({
  isOpen, onClose, onSave,
}: ICommandsModal) => {
  const [commands, setCommands] = useState<ICommand[]>();
  const [pickedCommand, setPickedCommand] = useState<ICommand>();

  /** Save picked command */
  const save = () => {
    if (pickedCommand) {
      onSave(pickedCommand.id);
      onClose();
    }
  };

  /** Fetch commands list */
  const getCommands = async () => {
    const res = await CommandsService.list();
    setCommands(res.data.data?.commands);
  };

  /** Get commands when component loads */
  useEffect(() => {
    getCommands();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} label="Pick command">
      <div className=" mx-10 my-5 flex flex-col justify-between">
        <div className="h-full mb-5">
          {commands && (
          <Select<ICommand>
            value={pickedCommand}
            onChange={(value) => value && setPickedCommand(value)}
            options={commands}
            getOptionValue={(item: ICommand) => item.description}
            getOptionLabel={(item: ICommand) => item.description}
          />
          )}
        </div>
        <div className="flex justify-center">
          <Button disabled={!pickedCommand} onClick={save} type="solid">
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CommandsModal;
