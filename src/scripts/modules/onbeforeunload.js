/**
 * onbeforeunload.js
 * [ F5 ブラウザ閉じる対応 ]
 * @param  {function} [callback] [コールバック関数を指定してください]
 * @return {boolean}  [固定値 : false（を返すことでリロード処理をキャンセルする）]
 */
export default function ( callback = function(){ console.assert('F5') }  ) {

  window.onbeforeunload = function(e) {}

  $(document).keydown( function(e) {
    // キーコード取得
    var keyCode = e.keyCode

    // F5
    if(keyCode == 116) {
      if ( callback ) callback()
      return false
    }
  })

}
