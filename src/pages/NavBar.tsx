import { Link } from 'react-router-dom';
import { AlignLeft, Bell, Moon } from 'react-feather';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const NavBar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <AlignLeft />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">tôi là tấn</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          data-toggle-theme="dim,retro"
          data-act-class="ACTIVECLASS">
          <div className="indicator">
            <Moon />
          </div>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
