import React from 'react';
import Footer from './Footer';
import CollapsibleExample from './Header';
import './test/test';
import MyForm from './Form';
function App() {
  return (
    <div className='App'>
      <CollapsibleExample />
      <main className='container'>
        <div>
          <h1>Рад приветствовать тебя на моей странице Виктор</h1>
        </div>
        <MyForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
