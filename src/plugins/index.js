/**
 * @name: plugins
 * @description: TODO
 * @author: Lingkai Shi
 * @date: 5/13/2024 10:52 PM
 * @version: 1.0
 */
import { router } from '@/plugins/router/index.js'
import { store } from '@/plugins/pinia.js'
import { registerElIcons } from '@/plugins/el-icons'

export const registerPlugins = (app) => {
  app.use(router)
  app.use(store)
  registerElIcons(app)
}
