import InvoiceDetails from '../../../components/productsInvoiceddetails/DetailsPage';
import Navbar from '../../layouts/Navbar';
import { store } from '../../../redux/store'; 
import { Provider } from 'react-redux';


const ProductInvoiceDetails = () => {
  
  
  return (
    <div>
    <Provider store={store}>
      <Navbar />
     <InvoiceDetails/>
     </Provider>
    </div>


  );
};

export default ProductInvoiceDetails;
