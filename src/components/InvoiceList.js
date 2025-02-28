import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvoiceList = ({ onSelectInvoice }) => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('https://code-test.sandbox.waya.se/api/invoices?page=1', {

          headers: {
            Authorization: 'UserKey qx6B1EtpQ46586E72z9S'
          }
        });
        setInvoices(response.data.data); // Access the `data` array in the response
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching invoices:', error);
        setError('Failed to fetch invoices. Please try again later.');
      } finally {
        setLoading(false); // Ensure loading is false after the request
      }
    };

    fetchInvoices();
  }, []);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id} onClick={() => onSelectInvoice(invoice.id)}>
            {invoice.id} - {invoice.customer_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;