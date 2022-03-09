import {useNavigate} from "react-router-dom"
import "./homeTextContainer.css"

export default function HomeTextContainer(props) {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/${props.title}`)
  }

  return (
    <div className="home-text-container" onClick={handleNavigate}>
      <h1>{props.title}</h1>
      <h1>Exercises</h1>
    </div>
  )
}
