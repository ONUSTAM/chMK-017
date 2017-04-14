import * as types from '../mutation-types'

export function action ( {commit, state } ) {
  if (state.githubAccount) {
    $.get('https://api.github.com/users/' + state.githubAccount + '/repos')
      .then(function (repos) {
        commit(types.GITHUB_LIST, repos)
      })
      .fail(function(e) {
        console.log(e);
        alert( "error", e );
      })
      .always(function() {
      })
  }
}

export function mutation (state, github) {
  state.githubList = github
}
