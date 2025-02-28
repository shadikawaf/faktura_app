# Invoice Management App

This is a **React-based invoice management app** that allows users to view, edit, and manage invoices fetched from a REST API. The app includes features like listing all invoices, viewing invoice details, and editing recipient information.

---

## Features

1. **List All Invoices**:
   - Fetch and display a paginated list of invoices.
   - Each invoice is clickable to view its details.

2. **View Invoice Details**:
   - Display detailed information about a specific invoice.
   - Includes recipient name, recipient address, due date, and delivery address.

3. **Edit Invoice Details**:
   - Allow users to edit the recipient's name and address.
   - Save changes using a `PUT` request to the API.

4. **Extra Features**:
   - Edit the delivery address.
   - Postpone the due date (optional).

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: For navigation between the invoice list and detail views.
- **CSS**: For styling the app.

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   
   git clone git remote add origin https://github.com/shadikawaf/faktura_app.git

   cd faktura-app

2. **Install dependencies:**:
  
   npm install

3. **Run the app:**:
  
   npm start
