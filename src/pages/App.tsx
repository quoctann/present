import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
