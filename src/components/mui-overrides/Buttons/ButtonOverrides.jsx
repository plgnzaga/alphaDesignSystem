export const ButtonOverrides = () => {
    return(
        {
            padding: '0.75rem 16px',
            '&#proceed':{
              cursor: 'pointer',
              fontWeight: 500,
              fontFamily: 'Graphik',
              transition: 'all .2s',
              display:'flex',
              alignItems: 'center',
              padding:'5px 15px'
            },
            '&#proceed:hover':{
              background: 'transparent'
            },
            '&#proceed > small.proceed-icon':{
              transition: 'transform .3s ease-in-out'
            },
            '&#proceed:hover small.proceed-icon':{
              transform: 'translateX(5px)'
            },
            '&#download':{
                position:'relative',
                height:'35px',
                paddingInline:'4rem',
                transition:'background 0.3s'
            },
            '&#download .text':{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                top: 0
            },
            '&#download .button-wrapper,&#download .text,&#download .icon':{
                overflow: 'hidden',
                position: 'absolute',
                width:'100%',
                height: '100%',
                left: 0,
                color: '#fff',
            },
            '&#download .text, &#download .icon':{
              transition: 'top 0.5s'
            },
            '&#download .icon': {
                color: '#fff',
                top: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            '&#download .icon svg':{
                width: '24px',
                height: '24px'
            },
            '&#download:hover':{
                background: '#6c18ff'
            },
            '&#download:hover .text': {
                top: '-100%'
            },
            '&#download:hover .icon': {
                top: '0'
            },
            '&#download:hover:before,&#download:hover:after':{
                opacity: 1,
                visibility: 'visible'
            }

            
            
          } 
    )
    
}