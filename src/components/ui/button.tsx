import * as React from 'react'

import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from '@chakra-ui/react'

interface ButtonLoadingProps {
  loading?: boolean
  loadingText?: React.ReactNode
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      loading,
      disabled,
      loadingText,
      children,
      size = 'md',
      variant = 'solid',
      colorPalette = 'primary',
      ...rest
    } = props

    return (
      <ChakraButton
        disabled={loading || disabled}
        ref={ref}
        size={size}
        variant={variant}
        colorPalette={colorPalette}
        {...rest}
      >
        {loading && !loadingText ?
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        : loading && loadingText ?
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        : children}
      </ChakraButton>
    )
  },
)
