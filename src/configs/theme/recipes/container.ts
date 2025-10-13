import { defineRecipe } from '@chakra-ui/react'

export const containerRecipe = defineRecipe({
  className: 'chakra-container',
  base: {
    w: '100%',
    mx: 'auto',
    maxW: {
      base: '100%',
      lg: '1280px', // 대형 데스크톱
    },
    px: {
      base: '20px',
      sm: '40px',
      lg: '0px',
    },
  },
  variants: {
    basis: {
      true: {
        p: {
          base: '0px 16px 0px',
          lg: '0px',
        },
      },
    },
    template: {
      true: {
        w: '100%',
        minW: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        px: '16px',
      },
    },
    centerContent: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    fluid: {
      true: {
        maxWidth: 'full',
      },
    },
  },
})
