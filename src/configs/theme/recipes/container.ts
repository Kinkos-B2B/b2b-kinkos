import { defineRecipe } from '@chakra-ui/react'

export const containerRecipe = defineRecipe({
  className: 'chakra-container',
  base: {
    w: '100%',
    mx: 'auto',
    maxW: {
      base: '100%',
      sm: '768px', // 태블릿
      lg: '1280px', // 대형 데스크톱
      xl: '1280px', // 초대형 데스크톱
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
