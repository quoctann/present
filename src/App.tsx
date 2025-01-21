import { Outlet } from 'react-router';
import Footer from './app/layouts/Footer';
import NavBar from './app/layouts/NavBar';

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
