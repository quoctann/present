import { Link } from 'react-router';
import { RoutePath } from '../../routes';

const HomePage = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(https://picsum.photos/1920/1080)'
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Xin chào</h1>
            <p className="mb-5">
              Cũng chẳng có gì ở đây ngoài vài thứ vớ vẩn linh tinh, mong là nó sẽ giúp bạn vui vẻ
              hơn, hoặc không :)
            </p>
            <Link to={RoutePath.CopyPasta} className="btn btn-primary">
              Bấm thử phát
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
