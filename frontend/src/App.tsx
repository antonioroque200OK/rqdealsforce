import React from 'react';
import { NotificationButton } from "./components/NotificationButton";
import { Header } from './components/Header/index';
import { SalesCard } from './components/SalesCard';

function App() {
  return (
    <React.Fragment>
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
