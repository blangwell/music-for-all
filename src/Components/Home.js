import LandingBanner from './LandingBanner';
import {Link} from 'react-router-dom'

function Home(props) {
  return (
    <div className="d-flex flex-column" id="home">
      <LandingBanner />
      <p className="page-copy m-2">Music 4 All is a program designed to teach music appreciation and
education through activities tailored to people with special needs. All
musicians ages 5 to 95 are encouraged to participate. There is a Music 4
All program for all levels of ability and experience. <Link to="/getinvolved">Get involved!</Link> </p>
    </div>
  )
}

export default Home;