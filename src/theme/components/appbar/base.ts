import { getColorDetail, getMainColor } from "../../common/functions";
import { darkColors, lightColors, primaryColors } from "../../palettes/base";


const BaseAppBar = {
    defaultProps: {
        style: {
            background: getColorDetail(lightColors, 10)?.hexCode,
            color: getMainColor(darkColors),
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',

        }
    },
    styleOverrides: {
        root: {
            "&[aria-navbar='light']": {
                "& svg": {
                    color: getMainColor(primaryColors)
                },
            }
        }
    }
}

export default BaseAppBar;