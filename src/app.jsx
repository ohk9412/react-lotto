import React, { useEffect } from 'react';
import styles from './app.module.css';
import Select from './components/select/select';
import Navbar from './components/navbar/navbar';
import initialize from './service/kakao';


function App() {
  useEffect(() => {initialize();},[])
  return (
    <div className={styles.app}>
      <Navbar />
      <Select />
    </div>
  );
  }
export default App;
