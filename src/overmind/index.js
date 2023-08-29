import { createOvermind } from 'overmind'
import { createActionsHook, createStateHook } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'
import * as effects from './effects'

const config = {
  state,
  actions,
  effects
}

export const overmind = createOvermind(config, { devtools: true })
export const useActions = createActionsHook()
export const useOvermindState = createStateHook()
