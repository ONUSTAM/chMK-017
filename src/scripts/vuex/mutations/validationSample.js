import * as types from '../mutation-types'
import spPSD from '../../modules/spPSD/drawText'
export function action ({commit, state}) {
  commit(types.VALIDATION_SAMPLE, spPSD())
}

export function mutation (state, text) {
  state.spLabel = text
}
