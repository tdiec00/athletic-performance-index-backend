import {api} from "./apiConfig"

export const createExercise = async (exerciseData) => {
  const resp = await api.post("/create", exerciseData)
  return resp.data
}

export const updateExercise = async (exerciseData) => {
  const resp = await api.put("/update", exerciseData)
  return resp.data
}

export const fetchExercise = async (workout_id) => {
  const resp = await api.get(`/${workout_id}`)
  return resp.data
}

export const fetchAllExercises = async () => {
  const resp = await api.get(`/exercises`)
  return resp.data
}
