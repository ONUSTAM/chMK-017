import VueRouter from 'vue-router'

// import notFound from '../view/router/notFound.vue'
import index from '../view/router/index.vue'
import github from '../view/router/github.vue'
import layout from '../view/router/layout.vue'
import copywriter from '../view/router/copywriter.vue'
import validationSample from '../view/router/validation.vue'
import exceptions from '../view/router/exceptions.vue'

const routes = [
  // { path: '*', component: notFound },
  // 初期
  { path: '/', name: 'index', component: index },
  // GitHub
  { path: '/github', name: 'github', component: github },
  // サンプルレイアウト＆コンポーネント
  { path: '/layout', name: 'layout', component: layout },
  // About
  { path: '/copywriter', name: 'copywriter', component: copywriter },
  // バリデーションサンプル
  { path: '/validationSample', name: 'validationSample', component: validationSample },
  // エラー画面
  { path: '/exceptions', name: 'exceptions', component: exceptions },
]

export default routes
