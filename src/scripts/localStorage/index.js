import moment from 'moment'

const CREATE_DATE = 'CREATE_DATE'
const UP_DATE = 'UP_DATE'
export default class localStoragelCtrl {

  constructor() {
    // ローカルストレージ非対応
    if ( !localStorage ) {
      return false
    }

    // 初めての人
    if ( !localStorage.getItem(CREATE_DATE) ) {
      localStorage.setItem(CREATE_DATE, nowDate() )
    }

    // 最終更新日（今日）を登録
    localStorage.setItem(UP_DATE, nowDate() )
  }
}

// 本日日付
function nowDate () {
  return moment().format('YYYY.MM.DD hh:mm:ss')
}
