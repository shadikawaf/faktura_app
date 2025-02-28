import React, { useState } from 'react';
import InvoiceList from './components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';

const App = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);

  return (
    <div>
      {selectedInvoiceId ? (
        <InvoiceDetail invoiceId={selectedInvoiceId} />
      ) : (
        <InvoiceList onSelectInvoice={setSelectedInvoiceId} />
      )}
    </div>
  );
};

export default App;