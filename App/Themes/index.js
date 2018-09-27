import Colors from './Colors'
import Fonts from './Fonts'
import Metrics from './Metrics'
import Images from './Images'
import Videos from './Videos'
import ApplicationStyles, {ScreenStylesType} from './ApplicationStyles'

export { Colors, Fonts, Images, Videos, Metrics, ApplicationStyles, ScreenStylesType }

import * as Lite from './Lite'

const Purple = { Colors, Fonts, Images, Videos, Metrics, ApplicationStyles, ScreenStylesType }

export default themes = {
  Lite,
  Purple
}
