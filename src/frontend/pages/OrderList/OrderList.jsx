
import OrderListTable from '../../../components/orderListTable/OrderListTable';
import Navbar from '../../layouts/Navbar';
import { store } from '../../../redux/store'; 
import { Provider } from 'react-redux';

const OrderList = () => {
  
  return (
    <div>
      <Provider store={store}>
      <Navbar />
      <div className='px-10'>
      <OrderListTable/>
      </div>
      </Provider>
    </div>
  );
};

export default OrderList;
