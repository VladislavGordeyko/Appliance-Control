import React, { useState } from 'react';
import Header from './components/Header';
import './index.css';
import WashingMachineItems from './components/appliance/WashingMachineItems';
import LeftMenu from './components/LeftMenu';
import CommandsItems from './components/commands/CommandsItems';

/** Main App */
const App = () => {
  const [aciteveMenuItem, setActiveMenuItem] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="mt-20 flex flex-row h-full">
        <LeftMenu
          menuItems={['Appliances', 'Commands']}
          activeIndex={aciteveMenuItem}
          onPress={(index) => setActiveMenuItem(index)}
        />
        <div className="ml-52 w-full">
          {aciteveMenuItem === 0
            ? <WashingMachineItems />
            : <CommandsItems />}
        </div>
      </div>
    </div>
  );
};

export default App;
