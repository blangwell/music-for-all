import puzzlePiece from '../puzzle-piece.png'

function LandingBanner() {
  return (
    <div id="landing-banner">
      <h1><span id="miss-cindy">Miss Cindy's<br />
      </span> <span id="m4a">Music 4 All</span></h1>
      <img src={puzzlePiece} alt="puzzle piece" id="puzzle-piece"/>
    </div>
  )
}

export default LandingBanner;