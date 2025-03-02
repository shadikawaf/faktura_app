# Invoice Management App

This is a **Invoice management app** that allows users to view, edit, and manage invoices fetched from a REST API. The app includes features like listing all invoices, viewing invoice details, and editing recipient information.

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

- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: For styling the app.

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**:
   
   git clone https://github.com/your-username/invoice-management-app.git
   cd invoice-management-app

2. **Install dependencies:**:
  
   npm install

3. **Run the app:**:
  
   npm start