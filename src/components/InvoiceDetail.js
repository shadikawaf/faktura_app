import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvoiceDetail = ({ invoiceId }) => {
  const [invoice, setInvoice] = useState(null);
  const [recipientName, setRecipientName] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await axios.get(`https://code-test.sandbox.waya.se/api/invoices/${invoiceId}`, {
          headers: {
            Authorization: `UserKey ${process.env.REACT_APP_API_KEY}`
          }
        });
        const invoiceData = response.data.data; // Access the nested `data` object
        setInvoice(invoiceData);
        setRecipientName(invoiceData.customer_name || ''); // Use `customer_name` as recipient name
        setRecipientAddress(invoiceData.customer_address || ''); // Use `customer_address` as recipient address
        setDueDate(invoiceData.due_date || ''); // Use `due_date`
        setDeliveryAddress(invoiceData.delivery_address || ''); // Use `delivery_address`
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Error fetching invoice:', error);
        setError('Failed to fetch invoice details. Please try again later.');
      } finally {
        setLoading(false); // Ensure loading is false after the request
      }
    };

    fetchInvoice();
  }, [invoiceId]);

  const handleSave = async () => {
    try {
      await axios.put(`https://code-test.sandbox.waya.se/api/invoices/${invoiceId}`, {
        customer_name: recipientName, // Update `customer_name`
        customer_address: recipientAddress, // Update `customer_address`
        delivery_address: deliveryAddress // Update `delivery_address` (extra task)
      }, {
        headers: {
          Authorization: `UserKey ${process.env.REACT_APP_API_KEY}`
        }
      });
      alert('Invoice updated successfully!');
    } catch (error) {
      console.error('Error updating invoice:', error);
      alert('Failed to update invoice. Please try again.');
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>{error}</div>; // Show error message
  if (!invoice) return <div>No invoice data found.</div>; // Fallback if no data

  return (
    <div>
      <h1>Invoice Detail</h1>
      <div>
        <label>Invoice ID:</label>
        <input
          type="text"
          value={invoice.id}
          readOnly // Make it read-only
        />
      </div>
      <div>
        <label>Recipient Name:</label>
        <input
          type="text"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
      </div>
      <div>
        <label>Recipient Address:</label>
        <input
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="text"
          value={dueDate}
          readOnly // Make it read-only
        />
      </div>
      <div>
        <label>Delivery Address:</label>
        <input
          type="text"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default InvoiceDetail;