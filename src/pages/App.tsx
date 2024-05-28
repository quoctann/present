import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
