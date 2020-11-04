import LandingBanner from './LandingBanner';

function Home(props) {
  return (
    <div className="d-flex flex-column" id="home">
      <h1 className="page-title">Home</h1>
      <LandingBanner />
    </div>
  )
}

export default Home;