import { createContext, useContext, useEffect } from 'react'

import { omit } from 'lodash'

export const PannelContext = createContext({
  isOpen: false,
  openPannel: () => {},
  closePannel: () => {},
})

export const PannelProvider = ({
  children,
  isOpen,
  onOpen,
  onClose,
}: {
  children: React.ReactNode
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}) => {
  return (
    <PannelContext.Provider
      value={{
        isOpen,
        openPannel: () => {
          onOpen()
        },
        closePannel: onClose,
      }}
    >
      {children}
    </PannelContext.Provider>
  )
}

export const usePannelContext = () => {
  const context = useContext(PannelContext)

  return context
}
