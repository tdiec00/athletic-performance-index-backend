import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {fetchAllExercises} from "../../Services/exercises"
import BodyPartTextContainer from "../../Components/BodyPartTextContainer/BodyPartTextContainer"

export default function BodyPartExercises() {
  const [exercises, setExercises] = useState([])
  const {bodypart} = useParams()

  useEffect(() => {
    const fetchExercises = async () => {
      const resp = await fetchAllExercises()
      setExercises(resp.data)
    }
    fetchExercises()
  }, [])

  return (
    <div>
      <BodyPartTextContainer />
    </div>
  )
}
