
import DashboardOverview from '../../../components/dashboardOverview/DashboardOverview';
import OrderListTable from '../../../components/orderListTable/OrderListTable';
import RevenuePaySystem from '../../../components/revenuePaysystem/RevenuePaySystem';
import Navbar from '../../layouts/Navbar';
import { store } from '../../../redux/store'; 
import { Provider } from 'react-redux';

const Dashboard = () => {
  
  return (
    
      <Provider store={store}>  
      <Navbar />
      <div className='px-7'>
      <RevenuePaySystem/>
      <DashboardOverview/>
      <OrderListTable/>
      </div>
       </Provider>
   
  );
};

export default Dashboard;
