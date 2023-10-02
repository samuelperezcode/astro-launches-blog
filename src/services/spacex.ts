import data from '../mock/launches.json'
import { type Launch } from '../types/api'

export const launches = data.launches as unknown as Launch[]

export const getLaunchById = (id: string) => {
  return launches.find( launch => launch.id === id)
} 

