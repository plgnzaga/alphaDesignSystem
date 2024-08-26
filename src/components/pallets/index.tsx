import { Box, Grid, Typography } from "@mui/material"
import { getColorDetail } from "../../theme/theme";
import { ColorScheme, primaryColors } from "../../theme/palettes";


const Palette: React.FC<{ colorScheme: Partial<ColorScheme>[] }> = ({ colorScheme }) => {
    return (
        <Grid sx={{display:'flex',flexWrap:'wrap',gap:'1rem',boxSizing:'border-box'}}>
            {colorScheme.map((item) => 
                <Box sx={{flexBasis:'23.5%',display:'grid',borderRadius:'0.25rem',background:'white',boxShadow:'10px 10px 30px #bebebe,-10px -10px 30px #ffffff',width:'calc(30%)'}}>
                <Grid sx={{height:'10rem',background:item.hexCode,padding:'1rem',color:'white'}}>
                    <Typography>{item.main ? "Base" : ""}</Typography>
                </Grid>
                <Grid sx={{display:'grid',padding:'1rem'}}>
                    <Typography>Alpha {item.colorGroup} <b>{item.shade}</b></Typography>
                    <Typography>{item.hexCode?.toUpperCase()}</Typography>
                </Grid>
                </Box>
            )}
        </Grid>
    )
}

export default Palette;