/**
 * @name: el-icons
 * @description: TODO
 * @author: Lingkai Shi
 * @date: 5/15/2024 9:32 AM
 * @version: 1.0
 */

import * as ElIcons from '@element-plus/icons-vue'

export const registerElIcons = (app) => {
  for (const iconName in ElIcons)
    // eslint-disable-next-line import/namespace
    app.component(iconName, ElIcons[iconName])
}
