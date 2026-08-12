import { useContext } from 'react'
import { ReducedMotionContext } from './reducedMotionContext'

export function useReducedMotionPreference() {
  return useContext(ReducedMotionContext)
}
