import { defineSlotRecipe } from '@chakra-ui/react'

export const tabsSlotRecipe = defineSlotRecipe({
  slots: ['root', 'trigger', 'list', 'content', 'contentGroup', 'indicator'],
  className: 'chakra-tabs',
  base: {
    root: {
      '--tabs-trigger-radius': 'radii.l2',
      position: 'relative',
      _horizontal: {
        display: 'block',
      },
      _vertical: {
        display: 'flex',
      },
    },
    list: {
      display: 'inline-flex',
      position: 'relative',
      isolation: 'isolate',
      '--tabs-indicator-shadow': 'shadows.xs',
      '--tabs-indicator-bg': 'bg',
      height: '56px',
      alignItems: 'center',

      _horizontal: {
        flexDirection: 'row',
      },
      _vertical: {
        flexDirection: 'column',
      },
    },
    trigger: {
      outline: '0',
      minW: 'var(--tabs-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      position: 'relative',
      cursor: 'button',
      gap: 'var(--tabs-gap)',
      fontFamily: 'Pretendard Variable',
      lineHeight: 1.6,
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease-in-out',
      _focusVisible: {
        zIndex: 1,
        outline: '2px solid',
        outlineColor: 'colorPalette.focusRing',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.4,
      },
    },
    content: {
      focusVisibleRing: 'inside',
      _horizontal: {
        width: '100%',
        pt: 'var(--tabs-content-padding)',
      },
      _vertical: {
        height: '100%',
        ps: 'var(--tabs-content-padding)',
      },
    },
    indicator: {
      width: 'var(--width)',
      height: 'var(--height)',
      borderRadius: 'var(--tabs-indicator-radius)',
      bg: 'var(--tabs-indicator-bg)',
      shadow: 'var(--tabs-indicator-shadow)',
      zIndex: -1,
    },
  },
  variants: {
    fitted: {
      true: {
        list: {
          display: 'flex',
        },
        trigger: {
          flex: 1,
          textAlign: 'center',
          justifyContent: 'center',
        },
      },
    },
    justify: {
      start: {
        list: {
          justifyContent: 'flex-start',
        },
      },
      center: {
        list: {
          justifyContent: 'center',
        },
      },
      end: {
        list: {
          justifyContent: 'flex-end',
        },
      },
    },
    size: {
      small: {
        root: {
          '--tabs-gap': '4px',
          '--tabs-content-padding': 'spacing.3',
        },
        list: {
          gap: '8px',
          height: '56px',
        },
        trigger: {
          px: '10px',
          py: '0px',
          fontSize: '14px',
          letterSpacing: '-0.28px',
          h: '32px',
        },
      },
      medium: {
        root: {
          '--tabs-height': '40px',
          '--tabs-gap': '6px',
          '--tabs-content-padding': 'spacing.4',
        },
        trigger: {
          px: '12px',
          py: '0px',
          fontSize: '16px',
          letterSpacing: '-0.32px',
          minHeight: '40px',
        },
      },
      large: {
        root: {
          '--tabs-height': '52px',
          '--tabs-gap': '8px',
          '--tabs-content-padding': 'spacing.4.5',
        },
        trigger: {
          px: '16px',
          py: '0px',
          fontSize: '18px',
          letterSpacing: '-0.36px',
          minHeight: '52px',
        },
      },
    },
    variant: {
      line: {
        list: {
          display: 'flex',
          borderColor: 'grey.2',
          _horizontal: {
            borderBottomWidth: '1px',
          },
          _vertical: {
            borderEndWidth: '1px',
          },
        },
        trigger: {
          color: 'grey.7',
          _disabled: {
            _active: {
              bg: 'initial',
            },
          },
          _selected: {
            color: 'grey.10',
            _horizontal: {
              _before: {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1.5px',
                backgroundColor: 'grey.10',
              },
            },
            _vertical: {
              _before: {
                content: '""',
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '1.5px',
                backgroundColor: 'grey.10',
              },
            },
          },
          _hover: {
            color: 'grey.10',
            _horizontal: {
              _before: {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '1px',
                backgroundColor: 'grey.2',
              },
            },
            _vertical: {
              _before: {
                content: '""',
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: 'grey.2',
              },
            },
          },
        },
      },
      subtle: {
        trigger: {
          borderRadius: 'var(--tabs-trigger-radius)',
          color: 'grey.7',
          _selected: {
            bg: 'grey.10',
            color: 'grey.0',
          },
          _hover: {
            bg: 'grey.transparent.1',
            color: 'grey.7',
          },
        },
      },
      enclosed: {
        list: {
          minH: 'calc(var(--tabs-height) + 8px)',
        },
        trigger: {
          justifyContent: 'center',
          color: 'grey.7',
          borderRadius: 'var(--tabs-trigger-radius)',
          _selected: {
            bg: 'grey.10',
            color: 'grey.0',
          },
          _hover: {
            bg: 'greytransparent.2',
            color: 'grey.7',
          },
        },
      },
      outline: {
        list: {
          '--line-thickness': '1px',
          '--line-offset': 'calc(var(--line-thickness) * -1)',
          borderColor: 'border',
          display: 'flex',
          _horizontal: {
            _before: {
              content: '""',
              position: 'absolute',
              bottom: '0px',
              width: '100%',
              borderBottomWidth: 'var(--line-thickness)',
              borderBottomColor: 'border',
            },
          },
          _vertical: {
            _before: {
              content: '""',
              position: 'absolute',
              insetInline: 'var(--line-offset)',
              height: 'calc(100% - calc(var(--line-thickness) * 2))',
              borderEndWidth: 'var(--line-thickness)',
              borderEndColor: 'border',
            },
          },
        },
        trigger: {
          color: 'fg.muted',
          borderWidth: '1px',
          borderColor: 'transparent',
          _selected: {
            bg: 'currentBg',
            color: 'colorPalette.fg',
          },
          _horizontal: {
            borderTopRadius: 'var(--tabs-trigger-radius)',
            marginBottom: 'var(--line-offset)',
            marginEnd: {
              _notLast: 'var(--line-offset)',
            },
            _selected: {
              borderColor: 'border',
              borderBottomColor: 'transparent',
            },
          },
          _vertical: {
            borderStartRadius: 'var(--tabs-trigger-radius)',
            marginEnd: 'var(--line-offset)',
            marginBottom: {
              _notLast: 'var(--line-offset)',
            },
            _selected: {
              borderColor: 'border',
              borderEndColor: 'transparent',
            },
          },
        },
      },
      plain: {
        trigger: {
          color: 'fg.muted',
          _selected: {
            color: 'colorPalette.fg',
          },
          borderRadius: 'var(--tabs-trigger-radius)',
          '&[data-selected][data-ssr]': {
            bg: 'var(--tabs-indicator-bg)',
            shadow: 'var(--tabs-indicator-shadow)',
            borderRadius: 'var(--tabs-indicator-radius)',
          },
        },
      },
    },
  },
  compoundVariants: [
    // Line variant with different sizes
    {
      variant: 'line',
      size: 'small',
      css: {
        trigger: {
          borderRadius: '6px',
        },
      },
    },
    {
      variant: 'line',
      size: 'medium',
      css: {
        trigger: {
          borderRadius: '8px',
        },
      },
    },
    {
      variant: 'line',
      size: 'large',
      css: {
        trigger: {
          borderRadius: '10px',
        },
      },
    },
    // Subtle variant with different sizes
    {
      variant: 'subtle',
      size: 'small',
      css: {
        trigger: {
          borderRadius: '6px',
        },
      },
    },
    {
      variant: 'subtle',
      size: 'medium',
      css: {
        trigger: {
          borderRadius: '8px',
        },
      },
    },
    {
      variant: 'subtle',
      size: 'large',
      css: {
        trigger: {
          borderRadius: '10px',
        },
      },
    },
    // Enclosed variant with different sizes
    {
      variant: 'enclosed',
      size: 'small',
      css: {
        trigger: {
          borderRadius: '6px',
        },
      },
    },
    {
      variant: 'enclosed',
      size: 'medium',
      css: {
        trigger: {
          borderRadius: '8px',
        },
      },
    },
    {
      variant: 'enclosed',
      size: 'large',
      css: {
        trigger: {
          borderRadius: '10px',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    variant: 'line',
  },
})
