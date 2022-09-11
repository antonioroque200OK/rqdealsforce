import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header/index';
import { SalesCard } from './components/SalesCard';


function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dashboard-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App
