import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0rem',
    boxSizing: 'border-box',
    fontFamily: 'Inter',
    '&::-webkit-scrollbar': {
      width: '7px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#D2D2D2',
      borderRadius: '6px',
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
