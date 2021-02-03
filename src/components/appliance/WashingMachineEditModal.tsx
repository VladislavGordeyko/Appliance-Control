import React, { useState } from 'react';
import { ApplianceStatus, ApplianceStatusCreate } from '../../api/enums';
import { IWashingMachine, IWashingMachineUpdate } from '../../api/models/WashingMachine';
import Button from '../common/Button';
import Modal from '../common/Modal';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

/** Interface for component */
interface IWashingMachineEditModal {
  /** Existion washing machine */
  washingMachine: IWashingMachine,

  /** Function on modal close */
  onClose: () => void;

  /** Is modal open */
  isOpen: boolean

  /** Function on save */
  onSave: (washinMachine: IWashingMachineUpdate) => void;
}

/** Modal for editing Appliance */
const WashingMachineEditModal = ({
  washingMachine, isOpen, onClose, onSave,
}: IWashingMachineEditModal) => {
  /** Name and status of appliance */
  const [name, setName] = useState(washingMachine.name);
  const [status, setStatus] = useState<ApplianceStatus |
  ApplianceStatusCreate>(washingMachine.status);

  /** Save Appliance */
  const save = () => {
    const washinMachine: IWashingMachineUpdate = { id: washingMachine.id, name, status: status || '' };
    onSave(washinMachine);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} label="Edit appliance">
      <div className=" mx-10 my-5 flex flex-col justify-between">
        <div className="h-full">
          <TextInput placeholder="Name" value={name} onTextChange={(value) => setName(value)} />
          <SelectInput<ApplianceStatusCreate | ApplianceStatus>
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

export default WashingMachineEditModal;
