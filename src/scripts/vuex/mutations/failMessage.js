import * as types from '../mutation-types'
import errorConfig from '../../com/error.config'

export function action ( {commit, state }, mutationTypes) {
  console.assert( errorConfig[ mutationTypes ], ' : ', mutationTypes)
  commit(types.FAIL_MESSAGE,  errorConfig[ mutationTypes ].message)
}
export function mutation (state, e) {
  state.failMessage = e
}
