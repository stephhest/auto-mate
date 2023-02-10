import HomeCarousel from "./HomeCarousel";

function MainPage() {
  return (
    <>
    <div className="px-4 my-5 text-center">
      <h1 className="display-5 fw-bold">AutoMate</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management
        </p>
        <div className="carousel-container">
          < HomeCarousel />
        </div>
      </div>
    </div>
    </>
  );
}

export default MainPage;
