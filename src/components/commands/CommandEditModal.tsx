import React, { useEffect, useState } from 'react';
import { ICommand, ICommandUpdate } from '../../api/models/Commans';
import Button from '../common/Button';
import Modal from '../common/Modal';
import TextInput from '../common/TextInput';

/** Interface for component */
interface ICommandEditModal {
  /** Command to edit */
  command: ICommand;

  /** Function on modal close */
  onClose: () => void;

  /** Is modal open */
  isOpen: boolean

  /** Function on save */
  onSave: (comamnd: ICommandUpdate) => void;
}

/** Modal for editing command */
const CommandEditModal = ({
  command, isOpen, onClose, onSave,
}: ICommandEditModal) => {
  const [description, setDescription] = useState(command.description);
  const [duratation, setDuratation] = useState(command.duratation.toString());

  /** Save edited command */
  const save = () => {
    const newCommand: ICommandUpdate = {
      id: command.id,
      description,
      duratation: parseInt(duratation, 10),
    };
    onSave(newCommand);
    onClose();
  };

  useEffect(() => {
    setDescription(command.description);
    setDuratation(command.duratation.toString());
  }, [command]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} label="Create appliance">
      <div className=" mx-10 my-5 flex flex-col justify-between">
        <div className="h-full">
          <TextInput
            placeholder="Description"
            value={description}
            onTextChange={(value) => setDescription(value)}
          />
          <TextInput
            type="number"
            placeholder="Duratation"
            value={duratation}
            onTextChange={(value) => setDuratation(value)}
          />
        </div>
        <div className="flex justify-center">
          <Button disabled={!(description && duratation)} onClick={save} type="solid">
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CommandEditModal;
