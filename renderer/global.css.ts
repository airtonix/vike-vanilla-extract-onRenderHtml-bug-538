import { globalStyle, style } from '@vanilla-extract/css';


export const html = style({
  display: 'flex',
  flexGrow: 1,
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'stretch',
  backgroundColor: 'red',
  vars: {
    '--font-family-opensans': 'Open Sans',
    '--font-family-robotoslab': 'Roboto Slab Variable',
  }
})

globalStyle(`${html} body`, {
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  padding: 0,
  margin: 0,
})
