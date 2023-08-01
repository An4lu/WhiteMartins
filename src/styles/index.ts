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
      grayback: '#DCDCDC',
      graytitle: '#6A6D70',
      graytext: '#1D2D3E',
      graydescription: '#556B82',
      white: '#FFFFFF',
      black: '#000000',
      lowblack: '#1D2D3E',
    },
  },
})

export type ThemeColors = keyof typeof theme.colors
