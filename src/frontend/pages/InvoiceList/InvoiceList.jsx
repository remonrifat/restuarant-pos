// Import your Layout component
import { Provider } from 'react-redux';
import InvoiceListTable from '../../../components/invoiceList/InvoiceListTable';
import RevenuePaySystem from '../../../components/revenuePaysystem/RevenuePaySystem';
import DashboardNavbar from '../../layouts/DasboardNavbar';
import Navbar from '../../layouts/Navbar';
import { store } from '../../../redux/store'; 






const InvoiceList = () => {
  




  return (
    <div>
    <Provider store={store}>
      <Navbar />
      <div className='px-10'>
      <RevenuePaySystem />
      <InvoiceListTable/>
      </div>
      </Provider>
    </div>

  );
};

export default InvoiceList;
