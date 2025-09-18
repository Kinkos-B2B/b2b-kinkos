import { defineRecipe } from '@chakra-ui/react'

export const buttonRecipe = defineRecipe({
  className: 'chakra-button',
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    borderWidth: '1px',
    borderColor: 'transparent',
    cursor: 'button',
    flexShrink: '0',
    outline: '0',
    isolation: 'isolate',
    fontWeight: '600', // SemiBold
    fontFamily: 'Pretendard Variable, sans-serif',
    transitionProperty: 'common',
    transitionDuration: 'moderate',
    focusVisibleRing: 'outside',
    _disabled: {
      layerStyle: 'disabled',
      cursor: 'not-allowed',
      opacity: 0.4,
    },
    _icon: {
      flexShrink: '0',
    },
  },

  variants: {
    size: {
      sm: {
        h: '32px',
        minW: '32px',
        textStyle: 'pre-caption-1', // 12px, 600, -2% letter-spacing
        px: '12px',
        gap: '4px',
        borderRadius: '6px',
        _icon: {
          width: '18px',
          height: '18px',
        },
      },
      md: {
        h: '40px',
        minW: '40px',
        textStyle: 'pre-body-5', // 14px, 600, -2% letter-spacing
        px: '16px',
        gap: '6px',
        borderRadius: '8px',
        _icon: {
          width: '20px',
          height: '20px',
        },
      },
      lg: {
        h: '48px',
        minW: '48px',
        textStyle: 'pre-body-3', // 16px, 600, -2% letter-spacing
        px: '24px',
        gap: '8px',
        borderRadius: '10px',
        _icon: {
          width: '24px',
          height: '24px',
        },
      },
      xl: {
        h: '58px',
        minW: '58px',
        textStyle: 'pre-body-1', // 18px, 600, -2% letter-spacing
        px: '28px',
        gap: '8px',
        borderRadius: '10px',
        _icon: {
          width: '24px',
          height: '24px',
        },
      },
    },
    variant: {
      solid: {
        bg: 'primary.4', // #013ffc
        color: 'grey.0', // #ffffff
        _hover: {
          bg: 'primary.5', // #0136d8
        },
        _active: {
          bg: 'primary.6', // #012db5
        },
        _expanded: {
          bg: 'primary.5',
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'primary.4',
        color: 'primary.4',
        bg: 'transparent',
        _hover: {
          bg: 'primary.1', // #f3f6ff
        },
        _active: {
          bg: 'primary.2', // #cad7ff
        },
        _expanded: {
          bg: 'primary.1',
        },
      },
      ghost: {
        color: 'primary.4',
        bg: 'transparent',
        _hover: {
          bg: 'primary.1',
        },
        _active: {
          bg: 'primary.2',
        },
        _expanded: {
          bg: 'primary.1',
        },
      },
      capsule: {
        borderRadius: '9999px',
        px: '28px',
        bg: 'primary.4', // #013ffc
        color: 'grey.0', // #ffffff
        _hover: {
          bg: 'primary.5', // #0136d8
        },
        _active: {
          bg: 'primary.6', // #012db5
        },
        _expanded: {
          bg: 'primary.5',
        },
      },

      'capsule-outline': {
        borderWidth: '1px',
        borderColor: 'primary.4',
        color: 'primary.4',
        bg: 'transparent',
        borderRadius: '9999px',
        px: '28px',
        _hover: {
          bg: 'primary.1', // #f3f6ff
        },
        _active: {
          bg: 'primary.2', // #cad7ff
        },
        _expanded: {
          bg: 'primary.1',
        },
      },
      'capsule-ghost': {
        borderRadius: '9999px',
        px: '28px',
        _hover: {
          bg: 'primary.1',
        },
        _active: {
          bg: 'primary.2',
        },
        _expanded: {
          bg: 'primary.1',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    variant: 'solid',
  },
})
