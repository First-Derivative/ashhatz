import { useEffect, useState } from "react"
import useWindowSize from "./useWindowSize"

export default function useBreakpoint(): string {
  const size = useWindowSize()
  const [breakpoint, setBreakpoint] = useState("xs")
  
  const updateBreakpoint = () => {
    const { width } = size
    if(width !== undefined) {
      if(width <= 290){
        setBreakpoint("xs")
        return
      } else if( 290 < width && width <= 540 ) {
        setBreakpoint("sm")
        return
      } else if( 540 < width && width <= 1000) {
        setBreakpoint("md")
        return
      } else if( 1000 < width && width <= 1380) {
        setBreakpoint("lg")
        return
      } else if( 1380 < width && width <= 1700) {
        setBreakpoint("xl")
        return
      } else {
        setBreakpoint("xxl")
        return
      }
    }
  }

  useEffect(() => {
    updateBreakpoint()
  }, [size])

  return breakpoint
}