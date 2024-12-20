# Pipeline Builder Frontend

This is a **React application** that uses the **React Flow library** to create and manage pipeline structures. The app includes features like custom nodes, authentication, downloading pipeline structures as images, and more. It is part of a full-stack project, with the backend built using **FastAPI** and Python frameworks.

## Features

- **React Flow Integration:** Create and visualize complex pipeline structures using a simple drag-and-drop interface.
- **Custom Nodes:** Utilize pre-defined custom nodes to enhance your pipeline designs.
- **Authentication:** Secure authentication implemented with token-based session management.
- **Export Pipelines:** Download the pipeline structure as a PNG image (excluding the minimap and controls).
- **Seamless User Experience:** Modern, user-friendly UI built with Tailwind CSS.
- **Backend Knowledge:** The backend for this application is built using FastAPI and Python frameworks. For more information, check out the [Pipeline Backend Repository](https://github.com/Boss-Lord-Sean-Gangster/Pipeline-backend).


## Installation

1. Clone the repository:

   ```bash
   git clone <frontend-repo-url>
   cd <frontend-repo-folder>
 
2. Install dependencies:

   ```bash
   npm install

   
3. Create a .env file in the root directory and add the following:

   ```bash
   REACT_APP_BACKEND_URL=<your-backend-url>

4. Start the Development server

   ```bash
     npm start
