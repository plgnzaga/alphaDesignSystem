
import { getColorDetail, getMainColor } from "../../common/functions";
import { primaryColors, warningColors } from "../../palettes/base";

export const BaseMuiButton = {
  styleOverrides:{
    root:{
      fontWeight:600,
      letterSpacing:'0.75px',
      boxShadow:'0px 3px 6px 0px rgba(140, 149, 159, 0.15);',
      textTransform:'capitalize',
      '&:hover':{
        boxShadow:'0px 3px 6px 0px rgba(140, 149, 159, 0.15);',
      },
      "&[buttontype='proceed'],&[buttontype='goback']":{
        lineHeight:'unset !important',
        paddingTop:'0.5rem',
        paddingBottom:'0.5rem'
      },
      "&[buttontype='proceed']":{
        '&::after':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/proceed.svg)` : 'url(../src/theme/dist/images/svg/proceed.svg)'}`,
          height:'14px',
          width: '14px',
          position:'relative',
          left:'3px',
          transition: 'transform .3s ease-in-out',
          '& svg path':{
            stroke:'#A100FF !important'
          }
        },
        '&:hover':{
          background:getColorDetail(primaryColors,800)?.hexCode,
        },
        '&:hover::after':{
           transform: 'translateX(4px)'
        },
      },
      "&[buttontype='goback']":{
        '&::before':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/goback.svg)` : 'url(../src/theme/dist/images/svg/goback.svg)'}`,
          height:'14px',
          width: '14px',
          position:'relative',
          right:'3px',
          transition: 'transform .3s ease-in-out',
          '& svg path':{
            stroke:'#A100FF !important'
          }
        },
        '&:hover':{
          background:getColorDetail(primaryColors,800)?.hexCode,
        },
        '&:hover::before':{
           transform: 'translateX(-4px)'
        },
      },
      "&[buttontype='next'],&[buttontype='prev']":{
        position:'relative',
        transition: 'all 0.3s',
        overflow:'hidden',
      },
      "&[buttontype='next']":{
        paddingLeft:'4px',
        paddingRight:'16px',
        '&::before,&::after':{
          position: 'relative',
          top:'1.5px',
        },
        '&::before':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/forwardIcon.svg)` : 'url(../src/theme/dist/images/svg/forwardIcon.svg)'}`,
          transition: 'all 0.3s',
          right:'calc(50%)',
          visibility:'none'
        },
        '&::after':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/forwardIcon.svg)` : 'url(../src/theme/dist/images/svg/forwardIcon.svg)'}`,
          transition: 'all 0.3s',
          right:'calc(-10%)',
        },
        '&:hover':{
          paddingRight:'4px',
          paddingLeft:'16px',
          color:getMainColor(primaryColors)
        },
        '&:hover::before':{
          right:'calc(-35%)'
        },
        '&:hover::after':{
          right:'calc(-70%)',
          visibility:'none'
        }
      },
      "&[buttontype='prev']":{
        paddingRight:'4px',
        paddingLeft:'16px',
        '&::before,&::after':{
          position: 'relative',
          top:'1.5px',
        },
        '&::after':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/backwardIcon.svg)` : 'url(../src/theme/dist/images/svg/backwardIcon.svg)'}`,
          transition: 'all 0.3s',
          left:'calc(50%)',
          visibility:'none'
        },
        '&::before':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/backwardIcon.svg)` : 'url(../src/theme/dist/images/svg/backwardIcon.svg)'}`,
          transition: 'all 0.3s',
          right:'calc(10%)',
        },
        '&:hover':{
          paddingLeft:'4px',
          paddingRight:'16px',
          color:getMainColor(primaryColors)
        },
        '&:hover::after':{
          left:'calc(-35%)'
        },
        '&:hover::before':{
          left:'calc(-70%)',
          visibility:'none'
        }
      },
      "&[buttontype='download'],&[buttontype='add']":{
        paddingLeft:0,
        paddingRight:'12%',
        position: 'relative',
        minWidth:'100%',
        height: '40px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        transition: 'all 0.3s',
        '&::after':{
          height:'100%',
          width: '14px',
          transition: 'all 0.3s',
          position: 'absolute',
          top:'25%',
          right:'calc(10%)',
        },
        '&:hover::after':{
          color:'#fff !important',
          transform:'translate(50%,0)',
          right:'50%',
        },
      },
      "&[buttontype='download']":{
        '&:hover':{
          background:getColorDetail(primaryColors,800)?.hexCode,
          color:'transparent'
        },
        '&::after':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/download.svg)` : 'url(../src/theme/dist/images/svg/download.svg)'}`,
        },
      },
      "&[buttontype='add']":{
        '&:hover':{
          background:getColorDetail(primaryColors,800)?.hexCode,
          color:'transparent'
        },
        '&::after':{
          content: `${window.location.pathname != '/iframe.html' ?  `url(..${window.location.pathname}/src/theme/dist/images/svg/add.svg)` : 'url(../src/theme/dist/images/svg/add.svg)'}`,
        },
      }
    },
  },
  defaultProps: {
    variant: 'contained',
  },
  variants:[
    {
      props: { variant: "contained", color:"warning"},
      style: {
        background: getMainColor(warningColors),
        color:getColorDetail(warningColors,700)?.hexCode,
        fontWeight:600,
        '&:hover':{
          color: getColorDetail(warningColors,700)?.hexCode,
          background: getColorDetail(warningColors,200)?.hexCode
        }
      },
    },
    {
      props: { variant: "outlined", },
      style: {
        border:'2px solid',
        fontWeight:600,
        '&:hover':{
          border:'2px solid',
          fontWeight:600,
        }
      },
    },
    {
      props: { variant: "outlined", color:"warning"},
      style: {
        borderColor: getMainColor(warningColors),
        color:getColorDetail(warningColors,600)?.hexCode
      },
    },
    {
      props: { variant: "outlined", color:"light" as any},
      style: {
        borderColor: '#f5f5f5',
        color:'gray',
        boxShadow:' 10px 10px 30px #ededed, -10px -10px 30px #ffffff'
      },
    }
  ]
}