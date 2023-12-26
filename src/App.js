// App.js
import React from 'react';
import './styles.css';
import GmailInterface from './Components/GoogleInterface';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Compose from './Components/Compose';
import Sent from './Components/Sent';
import EmailPreview from './Components/EmailPreview';
import Drafts from './Components/Drafts';

function App() {
  return (
  <Router>
  <>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<GmailInterface />} />
        <Route path="/compose" element={<Compose />} />
        <Route path="/sent" element={<Sent/>}/>
        <Route path='/email-preview' element={<EmailPreview/>}/>
        <Route path='/drafts' element={<Drafts/>}/>
      </Routes>
    </div>
  </>
</Router>
  );
}

export default App;
