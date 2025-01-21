import { Facebook, Youtube, Instagram, Smile } from 'react-feather';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <Smile />
        <p className="font-bold">
          Do something for hobby <br />
          Sm:le for nothing since 2000
        </p>
        <p>Copypasta © 2024 - Everything should be daijoubu</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Facebook />
          </a>
          <a>
            <Youtube />
          </a>
          <a>
            <Instagram />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
