import { ArrowCircleLeft, ArrowCircleLeftOutlined, ArrowLeftOutlined, CopyAll, CopyAllTwoTone } from "@mui/icons-material";
import { Box, Button, Grid, Paper, TextField, Tooltip, Typography} from "@mui/material";
import { useCallback, useRef, useState } from "react";




const TypographyComponent = () => {
    const [textValue, setTextValue] = useState('Alpha')
    const Variants = ["hero1", "hero2", "hero3", "h1", "h2", "h3", "h4", "h5", "h6", "button", "disclaimer"]
    const refs = Variants.map(() => useRef(null));
    const [isCopying,setIsCopying] = useState<boolean>(false);

    const handleTextChange = (value:string) => {
        value != '' ? setTextValue(value) : setTextValue('Alpha')
    }

    const copyText = useCallback(async(index: number) => {
       
        const text = refs[index].current.textContent;
        await navigator.clipboard.writeText(text.trim());
        setIsCopying(true);
        setTimeout(() => {
            setIsCopying(false);
        },500)
    }, [refs]);
    return (
        <>
            <Grid sx={{display:'flex',position: 'sticky',top: '0',background: 'white',borderBottom: '0.1px solid gray',padding: '1rem 0',zIndex: '2'}}>
            <TextField value={textValue} onChange={(e) => {
                handleTextChange(e.target.value)
            }} />
            <Grid sx={{display:'flex',alignItems:'center',gap:'0.5rem',paddingInline:'1rem'}}>
                <ArrowCircleLeftOutlined />
                <Typography variant="disclaimer">Type your text here.</Typography>
            </Grid>
            </Grid>
            {Variants.map((x, index) =>
                <Grid key={index} sx={{margin:'2rem 0'}}>
                    <Typography variant={x} sx={{ display: 'block' }}>{['Alpha'].includes(textValue) ? `${textValue.trim()} ${x.trim()}` : textValue.trim()}</Typography>
                    <Box style={{ display: 'flex' }}>
                        <Grid sx={{ display: 'grid', placeItems: 'center',border: '1px solid lightgray',paddingInline: '1rem',
borderRadius: '0.25rem' }}>
                            <Typography>
                                <code ref={refs[index]}>
                                    &lt;Typography variant="{x}"&gt;{['Alpha', ''].includes(textValue) ? `${textValue} ${x}` : textValue}&lt;/Typography&gt;
                                </code>
                            </Typography>
                        </Grid>
                        <Grid sx={{ display: 'grid', placeItems: 'center' }}>
                            <Tooltip title={isCopying ? `Copied!` : ``}>
                            <Button onClick={() => {
                                copyText(index);
                            }}><CopyAll /></Button>
                            </Tooltip>
                        </Grid>
                    </Box>
                </Grid>
            )}
        </>
    );
};

export default TypographyComponent;