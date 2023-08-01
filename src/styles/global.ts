import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0rem',
    boxSizing: 'border-box',
    fontFamily: 'Inter',
  },
  'body, select': {
    fontFamily: 'Inter',
    '&::-webkit-scrollbar': {
      width: '6px',
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
