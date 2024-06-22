const About = () => {
  const createSample = () => {
    const sample = [];
    for (let index = 0; index < 10; index++) {
      sample.push(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet
          pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi
          maxime quae totam ducimus consectetur?
        </p>
      );
    }
    return sample;
  };

  return (
    <main className="mb-4">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7 prose max-w-full mx-auto">
            <h3>Trang này vẫn đang làm</h3>
            {createSample()}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
