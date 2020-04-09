import React from 'react'
import { FocusVisibleContext } from '_utils/focusVisible/FocusVisibleProvider'

export const FocusVisibleConsumer = () => {
  const [isFocused, setIsFocused] = React.useState(false)
  const { hadKeyboardEvent, isInitialized } = React.useContext(FocusVisibleContext)

  const onFocus = React.useCallback(() => {
    if (!isFocused) setIsFocused(true)
  }, [isFocused])

  const onBlur = React.useCallback(() => {
    if (isFocused) setIsFocused(false)
  }, [isFocused])

  let focusVisible: boolean
  if (isInitialized) {
    focusVisible = hadKeyboardEvent && isFocused
  } else {
    // Fallback to focused when the `FocusVisibleProvider` is not used.
    focusVisible = isFocused
  }

  return React.useMemo(
    () => ({
      focusVisible,
      onFocus,
      onBlur,
    }),
    [focusVisible, onBlur, onFocus],
  )
}

export default FocusVisibleConsumer
