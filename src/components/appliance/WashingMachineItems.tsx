import React, { useState, useEffect } from 'react';
import WashingMachineService from '../../api/services/WashingMachineService';
import { IWashingMachineCreate, IWashingMachine } from '../../api/models/WashingMachine';
import WashingmachineItem from './WashingMachineItem';
import Button from '../common/Button';
import WashingMachineCreateModal from './WashingMachineCreateModal';

/** Main page of Appliances */
const WashingMachineItems = () => {
  const [washingMachines, setWashingmachines] = useState<IWashingMachine[]>();
  const [isModalCreateShown, setIsModalCreateShown] = useState(false);

  /** Sending request to get list of appliances */
  const getWashingMachines = async () => {
    const res = await WashingMachineService.list();
    setWashingmachines(res.data.data?.washingMachines);
  };

  /** Sending request to add new appliance */
  const addWashingMachine = async (washingmachine: IWashingMachineCreate) => {
    await WashingMachineService.create(washingmachine);
    getWashingMachines();
  };

  /** Get appliances when component loads */
  useEffect(() => {
    getWashingMachines();
  }, []);

  return (
    <div>
      <WashingMachineCreateModal
        isOpen={isModalCreateShown}
        onClose={() => setIsModalCreateShown(false)}
        onSave={addWashingMachine}
      />
      {washingMachines && washingMachines.length > 0 ? washingMachines.map((item, index) => (
        <WashingmachineItem
          onAddWork={getWashingMachines}
          onDeleteWork={getWashingMachines}
          onUpdate={getWashingMachines}
          key={index.toString()}
          item={item}
          onDelete={getWashingMachines}
        />
      )) : (
        <span className="flex justify-center h-24  items-center bg-gray-50">
          You dont have any appliances
        </span>
      )}
      <div className="flex justify-center">
        <Button onClick={() => setIsModalCreateShown(true)} type="outline">
          Add Appliance
        </Button>
      </div>
    </div>
  );
};

export default WashingMachineItems;
