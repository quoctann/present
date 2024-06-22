import { useEffect } from 'react';
import { AlignLeft, Bell, Moon, Sun } from 'react-feather';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';
import { RoutePath } from '../routes/routing';

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
            className="menu menu-sm dropdown-content dropdown-open mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">
            <li>
              <Link to={RoutePath.Root}>Home</Link>
            </li>
            <li>
              <Link to={RoutePath.About}>About</Link>
            </li>
            <li>
              <Link to={RoutePath.CopyPasta}>Copypasta</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">tôi là tấn</a>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            data-toggle-theme="retro,dim"
            data-act-class="ACTIVECLASS"
          />
          {/* sun icon */}
          <Sun className="swap-off " />
          {/* moon icon */}
          <Moon className="swap-on  " />
        </label>
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
