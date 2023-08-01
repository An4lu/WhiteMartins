import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0rem',
    boxSizing: 'border-box',
  },
  'body, input, textarea, button, select': {
    fontFamily: 'Inter',
    '&::-webkit-scrollbar': {
      width: '9px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#ffffff',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$green',
      borderRadius: '6px',
    },
  },
  body: {
    backgroundColor: '$grayback',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
  },
})
