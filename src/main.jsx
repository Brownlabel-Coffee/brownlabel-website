import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const LEGACY_KEYS = [
  'brownlabel-cart',
  'brownlabel-admin-inquiries-v1',
  'brownlabel-admin-orders-v1',
  'brownlabel-admin-products-v3',
  'brownlabel-customer-name',
  'brownlabel-customer-address',
  'brownlabel-customer-pincode',
];
const CLEARED_FLAG = 'brownlabel-storage-cleared-v2';

try {
  if (!localStorage.getItem(CLEARED_FLAG)) {
    LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
    localStorage.setItem(CLEARED_FLAG, '1');
  }
} catch {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
