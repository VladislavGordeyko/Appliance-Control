import React, { useState } from 'react';
import { ApplianceStatusCreate } from '../../api/enums';
import { IWashingMachineCreate } from '../../api/models/WashingMachine';
import Button from '../common/Button';
import Modal from '../common/Modal';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

/** Interface for component */
interface IWashingMachineCreateModal {
  /** Function on modal close */
  onClose: () => void;

  /** Is modal open */
  isOpen: boolean;

  /** Function on save */
  onSave: (washinMachine: IWashingMachineCreate) => void;
}

/** Modal for creation Appliance */
const WashingMachineCreateModal = ({
  isOpen, onClose, onSave,
}: IWashingMachineCreateModal) => {
  /** Name and status of appliance */
  const [name, setName] = useState('');
  const [status, setStatus] = useState<ApplianceStatusCreate>(ApplianceStatusCreate.IDLE);

  /** Save Appliance */
  const save = () => {
    const washinMachine: IWashingMachineCreate = { name, status };
    onSave(washinMachine);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} label="Create appliance">
      <div className=" mx-10 my-5 flex flex-col justify-between">
        <div className="h-full">
          <TextInput placeholder="Name" value={name} onTextChange={(value) => setName(value)} />
          <SelectInput<ApplianceStatusCreate>
            placeholder="status"
            onChange={(value) => setStatus(value)}
            getItemTitle={(item) => item}
            value={status || ApplianceStatusCreate.IDLE}
            values={Object.values(ApplianceStatusCreate)}
          />
        </div>
        <div className="flex justify-center">
          <Button disabled={!(name && status)} onClick={save} type="solid">
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WashingMachineCreateModal;
