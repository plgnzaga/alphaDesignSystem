import { Button, Checkbox, Grid, InputLabel } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const accentureTagLine = "Together, let's create positive, long-lasting change.";

const typographySnippet = (variant, text) => {
  return `<Typography variant="${variant}">${text == undefined ? accentureTagLine : text}</Typography>`
}
const Typeface = (props) => {

  return (
    <>
      <Grid style={{marginBottom:"5rem"}}>
      <Typography variant="hero3">Typefaces</Typography>
      </Grid>
    <Grid style={{display:"grid",gridTemplateColumns:"repeat(1fr)",gap:"1rem"}}>
      <Grid>
        <code>{typographySnippet("hero1", "Accenture")}</code>
        <Typography variant="hero1">hero1. Accenture</Typography>
      </Grid>

      <Grid>
        <code>{typographySnippet("hero2", "Accenture")}</code>
        <Typography variant="hero2">hero2. Accenture</Typography></Grid>
      <Grid>
        <code>{typographySnippet("hero3", "Accenture")}</code>
        <Typography variant="hero3">hero3. Accenture</Typography></Grid>
      <Grid>
        <code>{typographySnippet("h1")}</code>
        <Typography variant="h1">h1. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("h2")}</code>
        <Typography variant="h2">h2. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("h3")}</code>
        <Typography variant="h3">h3. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("h4")}</code>
        <Typography variant="h4">h4. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("h5")}</code>
        <Typography variant="h5">h5. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("h6")}</code>
        <Typography variant="h6">h6. {accentureTagLine}</Typography>
      </Grid>

      <Grid>
        <code>{typographySnippet("subtitle1")}</code>
        <Typography variant="subtitle2">subtitle2. {accentureTagLine}</Typography>
        </Grid>
      <Grid>
        <code>{typographySnippet("subtitle1")}</code>
        <Typography variant="subtitle1">subtitle1. {accentureTagLine}</Typography></Grid>


      <Grid>
        <code>{typographySnippet("body2")}</code>
        <Typography variant="body2">body2. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("body1")}</code>
        <Typography variant="body1">body1. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("button")}</code>
        <Typography variant="button" style={{display:'block'}}>button. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("caption")}</code>
        <Typography variant="caption" style={{display:'block'}}>caption. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("overline")}</code>
        <Typography variant="overline" style={{display:'block'}}>overline. {accentureTagLine}</Typography>
      </Grid>
      <Grid>
        <code>{typographySnippet("inherit")}</code>
        <Typography variant="inherit" style={{display:'block'}}>inherit. {accentureTagLine}</Typography>
      </Grid>
      </Grid>
    </>

  );
}

export default Typeface;
