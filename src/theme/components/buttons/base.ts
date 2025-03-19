
import { getColorDetail, getMainColor } from "../../common/functions";
import { primaryColors, warningColors } from "../../palettes/base";
import prevIconSvg from "../../dist/images/svg/backwardIcon.svg";
import nextIconSvg from "../../dist/images/svg/forwardIcon.svg";
import backwardIconSvg from "../../dist/images/svg/goback.svg";
import forwardIconSvg from "../../dist/images/svg/proceed.svg"
const appUrl = window.location.href.split("/")[0] + "//" + window.location.href.split("/")[2] + "/" + window.location.href.split("/")[3];
const addIconSvg = "data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='white'/%3E%3C/svg%3E%0A"
const downloadIconSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 35' id='bdd05811-e15d-428c-bb53-8661459f9307' data-name='Layer 2' class='svg'%3E%3Cpath stroke='%23ffffff' fill='%23ffffff' d='M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z'%3E%3C/path%3E%3Cpath stroke='%23ffffff' fill='%23ffffff' d='M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z'%3E%3C/path%3E%3Cpath stroke='%23ffffff' fill='%23ffffff' d='M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z'%3E%3C/path%3E%3C/svg%3E"

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
          content: `url(${forwardIconSvg})`,
          //content: `${window.location.pathname != '/iframe.html' ?  `url(${appUrl}/src/theme/dist/images/svg/proceed.svg)` : 'url(../src/theme/dist/images/svg/proceed.svg)'}`,
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
          content: `url(${backwardIconSvg})`,
          //content: `${window.location.pathname != '/iframe.html' ?  `url(${appUrl}/src/theme/dist/images/svg/goback.svg)` : 'url(../src/theme/dist/images/svg/goback.svg)'}`,
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
          content: `url(${nextIconSvg})`,
          //content: `${window.location.pathname != '/iframe.html' ?  `url(${appUrl}/src/theme/dist/images/svg/forwardIcon.svg)` : 'url(../src/theme/dist/images/svg/forwardIcon.svg)'}`,
          transition: 'all 0.3s',
          right:'calc(50%)',
          visibility:'none'
        },
        '&::after':{
          ontent: `url(${nextIconSvg})`,
          //content: `${window.location.pathname != '/iframe.html' ?  `url(${appUrl}/src/theme/dist/images/svg/forwardIcon.svg)` : 'url(../src/theme/dist/images/svg/forwardIcon.svg)'}`,
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
          content: `url(${prevIconSvg})`,
          //content: `${window.location.pathname != '/iframe.html' ?  `url(${appUrl}/src/theme/dist/images/svg/backwardIcon.svg)` : 'url(../src/theme/dist/images/svg/backwardIcon.svg)'}`,
          transition: 'all 0.3s',
          left:'calc(50%)',
          visibility:'none'
        },
        '&::before':{
          content: `url(${prevIconSvg})`,
          //content: `${window.location.pathname != '/iframe.html' ?  `url(${appUrl}/src/theme/dist/images/svg/backwardIcon.svg)` : 'url(../src/theme/dist/images/svg/backwardIcon.svg)'}`,
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
          content: `url("${downloadIconSvg}")`,
        },
      },
      "&[buttontype='add']":{
        '&:hover':{
          background:getColorDetail(primaryColors,800)?.hexCode,
          color:'transparent'
        },
        '&::after':{
          content:`url("${addIconSvg}")`
          //content: `${window.location.pathname != '/iframe.html' ?  `url(${appUrl}/src/theme/dist/images/svg/add.svg)` : 'url(../src/theme/dist/images/svg/add.svg)'}`,
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
        background:'white',
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