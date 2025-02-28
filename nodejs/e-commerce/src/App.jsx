import { BrowserRouter as Router, Route, Routes, Outlet, Link, useNavigate } from 'react-router-dom';

import './App.css';
import SideBar from './SideBar';
import Card1 from './Dashboard/Card1';
import StatsCard from './Dashboard/StatsCard';
import Card2 from './Dashboard/Card2';
import Card3 from './Dashboard/Card3';
import Card4 from './Dashboard/Card4';
import PopularProducts from './Dashboard/PopularProducts';
import EarningRepo from './Dashboard/EarningRepo';
import Transaction from './Dashboard/Transaction';
import Orders from './Dashboard/Orders';
import InvoiceTable from './Dashboard/InvoiceTable';
import ProductList1 from './Product_List/ProductList1';
import ProductInfo from './Product_List/ProductInfo';
import CategoryList from './Category_List/CategoryList';
import ProductInfoForm from './Add_Product/ProductInfoForm';
import PricingForm from './Add_Product/PricingForm';
import OrganiseForm from './Add_Product/OrganiseForm';
import VarientForm from './Add_Product/VarientForm';
import OrderListCard1 from './Order/OrderListCard1';
import OrdersTable from './Order/OrdersTable';
import AllCustomers from './Customers/AllCustomers';
import { useState } from 'react';
import OrderDetails from './Order/OrderDetails';
import Address from './Order/Address';
import CustomersPage from './Customers/CustomersPage';
import ReviewTable from './Manage_Reviews/ReviewsTable';

import Maps from './map';

function App() {

  return (
    <Router>
      <div className="bg-MybgColor">
        <div className='flex flex-row'>  
          <SideBar />
          <div className='mt-16'>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/productList" element={<><ProductList1 /><ProductInfo/></>} />
              <Route path="/addProduct" 
              element={<>
                <div className='flex'>
                  <div>
                    <ProductInfoForm/>
                    <VarientForm />
                  </div>
                    <PricingForm />
                    {/* errrrrrrrrrrrrrr below not showing com */}
                    <OrganiseForm />  
                  </div>
                </>}/>
              <Route path="/categoryList" element={<><CategoryList /></>}/>
              <Route path="/orderList" element={<><OrderListCard1 /><OrdersTable/> </>}/>

              <Route path='/orderDetails' element={<><OrderDetails /> <Address/> </>} />

                {/* it is working */}
                <Route path="/AllCustomer" element={<><AllCustomers /></>}/>
             
                {/* this is just for testing purpose */}
              <Route path="/CustomerDetails" element={<><CustomersPage /> </>}/>

              <Route path='/manageReviews' element={<><ReviewTable /></>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>

    // <>
    //   <Maps />
    // </>
  );
}

function MainContent() {
  // const navigate = useNavigate();

  return (
    <div>
      <div className='flex mt-20'>
        <Card1 />
        <StatsCard />
      </div>
      <div className='flex'>
        <Card2 />
        <Card3 />
      </div>
      <Card4 />
      <div className='flex'>
        <EarningRepo />
        <PopularProducts />
      </div>
      <div className='flex'>
        <Orders />
        <Transaction />
      </div>
      <InvoiceTable />
    </div>
  );
}

export default App;