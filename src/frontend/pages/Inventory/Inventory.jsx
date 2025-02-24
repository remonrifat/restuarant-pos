import React from 'react';
import { Provider } from 'react-redux'; 
import RevenuePaySystem from '../../../components/revenuePaysystem/RevenuePaySystem';
import ProductListTable from '../../../components/inventoryList/InventoryListTable';
// import DashboardNavbar from '../../layouts/DasboardNavbar';
import { store } from '../../../redux/store'; 
import Navbar from '../../layouts/Navbar';


const Inventory = () => {
  return (
    <Provider store={store}>  
      <div>
        <Navbar />
        <div className="px-10">
          <RevenuePaySystem />
          <ProductListTable />
        </div>
      </div>
    </Provider>
  );
};

export default Inventory;
