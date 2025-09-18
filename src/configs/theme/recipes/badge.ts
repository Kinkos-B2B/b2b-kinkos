import { defineRecipe } from '@chakra-ui/react'

export const badgeRecipe = defineRecipe({
  className: 'chakra-badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    fontWeight: '600', // SemiBold
    fontFamily: 'Pretendard Variable, sans-serif',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    lineHeight: '1 !important',
    _icon: {
      flexShrink: '0',
    },
  },
  variants: {
    size: {
      md: {
        textStyle: 'pre-caption-1', // 12px, 600, -2% letter-spacing
        px: '6px',
        gap: '2px',
        minH: '20px',
        _icon: {
          width: '16px',
          height: '16px',
        },
      },
      lg: {
        textStyle: 'pre-caption-1', // 12px, 600, -2% letter-spacing
        px: '10px',
        gap: '4px',
        minH: '24px',
        _icon: {
          width: '16px',
          height: '16px',
        },
      },
      xl: {
        textStyle: 'pre-heading-4', // 18px, 700, -1% letter-spacing
        px: '10px',
        gap: '4px',
        minH: '36px',
        _icon: {
          width: '16px',
          height: '16px',
        },
      },
    },
    variant: {
      solid: {
        bg: 'primary.1',
        color: 'primary.4',
      },
      subtle: {
        bg: 'primary.4',
        color: 'grey.0',
      },
    },
    colorPalette: {
      primary: {
        solid: {
          bg: 'primary.1',
          color: 'primary.4',
        },
        subtle: {
          bg: 'primary.4',
          color: 'grey.0',
        },
      },
      secondary: {
        solid: {
          bg: 'secondary.1',
          color: 'secondary.4',
        },
        subtle: {
          bg: 'secondary.1',
          color: 'secondary.4',
        },
      },
      white: {
        solid: {
          bg: 'grey.0',
          color: 'secondary.4',
        },
        subtle: {
          bg: 'secondary.4',
          color: 'grey.0',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    variant: 'solid',
  },
})
