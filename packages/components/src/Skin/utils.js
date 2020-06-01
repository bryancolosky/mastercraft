// ⚙️ Configs
import {
  SKIN
} from './config'

// 🛠 Utilities
export const getStyles = ({ theme, skin }) => {
  const skinTokens = {
    [SKIN.DOM]: theme.main.colorTextPrimary,
    [SKIN.NATIVE]: theme.main.colorTextSecondary
  }
  return skinTokens[skin]
}
