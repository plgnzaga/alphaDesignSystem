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
        //borderRadius:'1.5rem'
      },
    }
  },
  MuiAppBar:BaseAppBar
}