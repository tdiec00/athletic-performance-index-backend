import HomeTextContainer from "../../Components/HomeTextContainer/HomeTextContainer"
import "./home.css"
const Home = () => {
  return (
    <div className="home-content-container">
      <h1> Welcome to Athletic Performance Index. Explore our various lists of exercises.</h1>
      <HomeTextContainer title="Back" />
      <HomeTextContainer title="Bicep" />
      <HomeTextContainer title="Chest" />
      <HomeTextContainer title="Shoulders" />
      <HomeTextContainer title="Legs" />
      <HomeTextContainer title="Triceps" />
    </div>
  )
}

export default Home
