import { BorderColor } from "@mui/icons-material";
import { getColorDetail, getMainColor } from "../common/functions";
import { dangerColors, darkColors, infoColors, primaryColors, successColors, warningColors } from "../palettes/base";
import BaseAppBar from "./appbar/base";
import { BaseMuiButton } from "./buttons/base";

export const BaseComponents = {
  MuiTypography:{
    styleOverrides:{
      root:{
        fontFamily:'Graphik !important',
      }
    },
  },
  MuiButton:BaseMuiButton as any,
  MuiDialog:{
    styleOverrides:{
      root:{
        borderRadius: "1.5rem",
      },
      paper: {
        maxHeight: "unset",
        overflow: "unset",
        "& .MuiDialogTitle-root":{
          justifyContent: "space-between",
          borderBottom: "1px solid #E5E7EB",
          fontSize:'1rem',
        },
        "& .MuiDialogContent-root":{
          padding: "1.5rem !important"
        },
        "& .MuiDialogActions-root":{
          padding: "0.75rem",
          paddingInline: "1.5rem",
          justifyContent: "flex-end",
          gap: "0.5rem",
          borderTop: "1px solid #E5E7EB",
          borderRadius: "0 0 1.5rem 1.5rem"
        }
      },
    }
  },
  MuiAlert:{
    styleOverrides:{
      root:{
        
      },
      outlinedSuccess: {
        border:`2px solid ${getMainColor(successColors)}`,
        color:getMainColor(successColors)
      },
      outlinedWarning: {
       border:`2px solid ${getMainColor(warningColors)}`
      },
      outlinedInfo: {
       border:`2px solid ${getMainColor(infoColors)}`,
       color:getMainColor(infoColors)
      },
      outlinedError:{
        border:`2px solid ${getMainColor(dangerColors)}`,
        color:getMainColor(dangerColors)
      }
    },
    
  },
  MuiChip:{
    styleOverrides:{
      root:{
        border: `2px solid`,
        fontWeight: '600 !important',
        
      },
      outlinedLight:{
        borderColor: '#f5f5f5',
        color:'gray',
      },
      filledWarning:{
        color:getColorDetail(warningColors,700)?.hexCode
      }
    }
  },
  MuiPaper:{
    styleOverrides:{
      root:{
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px !important'
      }
    }
  },
  MuiAppBar:BaseAppBar
}