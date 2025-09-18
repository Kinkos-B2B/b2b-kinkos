import * as React from 'react'

import type { BadgeProps as ChakraBadgeProps } from '@chakra-ui/react'
import { Badge as ChakraBadge } from '@chakra-ui/react'

export interface BadgeProps extends ChakraBadgeProps {
  variant?: 'solid' | 'subtle'

  /**
   * 왼쪽 아이콘
   */
  leftIcon?: React.ReactNode
  /**
   * 오른쪽 아이콘
   */
  rightIcon?: React.ReactNode
  /**
   * 왼쪽 아이콘 표시 여부
   * @default true
   */
  showLeftIcon?: boolean
  /**
   * 오른쪽 아이콘 표시 여부
   * @default true
   */
  showRightIcon?: boolean
}

const BadgeColorPalette = {
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
      bg: 'secondary.4',
      color: 'grey.0',
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
}

const helper = ({
  variant,
  colorPalette,
}: {
  variant?: 'solid' | 'subtle'
  colorPalette?: 'primary' | 'secondary' | 'white'
}) => {
  if (variant && colorPalette) {
    return BadgeColorPalette[colorPalette][variant]
  }
  return {}
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(props, ref) {
    const {
      children,
      size = 'lg',
      variant = 'solid',
      colorPalette = 'primary',
      leftIcon,
      rightIcon,
      showLeftIcon = true,
      showRightIcon = true,
      ...rest
    } = props

    return (
      <ChakraBadge
        ref={ref}
        size={size}
        variant={variant}
        colorPalette={colorPalette}
        css={helper({ variant, colorPalette: colorPalette as any })}
        {...rest}
      >
        {showLeftIcon && leftIcon && (
          <span className="badge-left-icon">{leftIcon}</span>
        )}
        {children}
        {showRightIcon && rightIcon && (
          <span className="badge-right-icon">{rightIcon}</span>
        )}
      </ChakraBadge>
    )
  },
)
