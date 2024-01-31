import { globalStyle, style } from '@vanilla-extract/css';


export const sidebar = style({
  padding: '10px',
  paddingLeft: '2px',
  marginLeft: '-10px',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '1.8em',
  borderRight: '2px solid #eee'
})


globalStyle(`${sidebar} a.is-active`,{
  backgroundColor: '#eee'
})
