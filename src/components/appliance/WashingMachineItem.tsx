import React, { useState } from 'react';
import moment from 'moment';
import { ApplianceStatus } from '../../api/enums';
import { IWashingMachineUpdate, IWashingMachine } from '../../api/models/WashingMachine';
import WashingMachineService from '../../api/services/WashingMachineService';
import washingMachineImg from '../../img/washing-machine.jpg';
import WashingMachineEditModal from './WashingMachineEditModal';
import Button from '../common/Button';
import CommandsModal from '../commands/CommandsModal';

/** Interface for component */
interface IWashingmachineItem {
  /** Appliance */
  item: IWashingMachine

  /** Function on update */
  onUpdate: () => void

  /** Function on delete */
  onDelete: () => void

  /** Function on delete active work of appliance */
  onDeleteWork: () => void

  /** Function on add active work of appliance  */
  onAddWork: () => void
}

/** Component with main appliance info */
const WashingmachineItem = ({
  item, onUpdate, onDelete, onDeleteWork, onAddWork,
}: IWashingmachineItem) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenCommandModal, setIsOpenCommandModal] = useState(false);

  /** Get status color styles */
  const getStatusColor = (status: ApplianceStatus) => {
    switch (status) {
      case ApplianceStatus.IDLE: return 'bg-gray-500';
      case ApplianceStatus.OFFLINE: return 'bg-red-500';
      case ApplianceStatus.WORKING: return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  /** Sending request to api for update appliance */
  const updateWashingMachine = async (washingMachine: IWashingMachineUpdate) => {
    await WashingMachineService.update(washingMachine);
    onUpdate();
  };

  /** Sending request to api for delete appliance */
  const deleteWashingMachine = async () => {
    await WashingMachineService.delete(item.id);
    onDelete();
  };

  /** Sending request to api for delete active command of appliance */
  const deleteWork = async (commandId: string) => {
    await WashingMachineService.deleteWork(item.id, commandId);
    onDeleteWork();
  };

  /** Sending request to api for add active command of appliance */
  const addWork = async (commandId : string) => {
    try {
      await WashingMachineService.addWork(item.id, commandId);
      onAddWork();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="flex px-32 bg-gray-50 my-5 py-5">
      <WashingMachineEditModal
        washingMachine={item}
        isOpen={isOpenEditModal}
        onClose={() => setIsOpenEditModal(false)}
        onSave={updateWashingMachine}
      />
      <CommandsModal
        isOpen={isOpenCommandModal}
        onSave={addWork}
        onClose={() => setIsOpenCommandModal(false)}
      />
      <img className="w-60" src={washingMachineImg} alt="" />

      <div className="flex ml-8  flex-col">
        <div className="flex">
          <div className="mr-4"><Button type="solid" onClick={() => setIsOpenEditModal(true)}>edit</Button></div>
          <Button type="solid" onClick={deleteWashingMachine}>delete</Button>
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <p className="text-3xl">{item.name}</p>
          <div className="flex items-center">
            Status:
            <div className={`mx-2 w-3 h-3 rounded-lg ${getStatusColor(item.status)}`} />
            (
            {item.status}
            )
          </div>
          {item.activeCommands.length > 0
            ? (
              <div className="flex items-center">
                Currendtly working on:
                {item.activeCommands.map((activeCommand, idx) => (
                  <p key={idx.toString()} className="flex items-center content-center">
                    {activeCommand.command.description}
                    - finishing at
                    {moment(activeCommand.finishAt).format('LT')}
                    <Button type="outline" onClick={() => deleteWork(activeCommand.id)}>
                      Delete work
                    </Button>
                  </p>
                ))}

              </div>
            )
            : (
              <div>
                <Button type="solid" onClick={() => setIsOpenCommandModal(true)}>
                  Add work
                </Button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default WashingmachineItem;
