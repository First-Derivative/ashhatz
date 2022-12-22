import { useState, useEffect } from "react"
import useWindowSize from "./useWindowSize"

export default function useMobile(threshold: number = 540): boolean {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const updateMobile = () => {
    const { width } = size
    if (width !== undefined) {
      if (width <= threshold) {
        setIsMobile(true)
        return
      }
      setIsMobile(false)
    }
  }

  useEffect(() => {
    updateMobile()
  }, [size])

  return isMobile
}