import React from 'react';
import styles from './app.module.css';
import Select from './components/select/select';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Select />
    </div>
  );
  }
export default App;
