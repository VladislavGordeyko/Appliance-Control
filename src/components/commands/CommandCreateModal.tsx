import React, { useState } from 'react';
import { ICommandCreate } from '../../api/models/Commans';
import Button from '../common/Button';
import Modal from '../common/Modal';
import TextInput from '../common/TextInput';

/** Interface for component */
interface ICommandCreateModal {
  /** Function on modal close */
    onClose: () => void;

    /** Is modal open */
    isOpen: boolean

     /** Function on save */
    onSave: (comamnd: ICommandCreate) => void;
}

/** Modal for creation command */
const CommandCreateModal = ({
  isOpen, onClose, onSave,
}: ICommandCreateModal) => {
  const [description, setDescription] = useState('');
  const [duratation, setDuratation] = useState('');

  /** Save created command */
  const save = () => {
    const newCommand: ICommandCreate = { description, duratation: parseInt(duratation, 10) };
    onSave(newCommand);
    onClose();
  };

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

export default CommandCreateModal;
