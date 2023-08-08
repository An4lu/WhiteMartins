import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      green: '#00AD6C',
      grayback: '#F5F5F5',
      graytitle: '#6A6D70',
      graytext: '#1D2D3E',
      graydescription: '#556B82',
      grayline: '#D2D2D2',
      white: '#FFFFFF',
      black: '#000000',
      textblack: '#303030',
      textlowgray: '#333',
      lowblack: '#1D2D3E',
      blue: '#003599',
      bluecard: '#5899DA',
      yellow: '#D8A800',
      red: '#BA3535',
    },
  },
})

export type ThemeColors = keyof typeof theme.colors
