import { useState, useEffect } from 'react'

/* This custom hook takes in a value and a delay as parameters, and returns a debounced value */

export const useDebouncedValue = (value: string, delay: number): string => {

   // use state hook to store the debounced value
   const [debouncedValue, setDebouncedValue] = useState<string>(value)

   // use effect hook to update the debounced value with a delay
   useEffect(() => {
      // timeout to update the debounced value after the specified delay
      const debounceHandler = setTimeout(() => {
         setDebouncedValue(value)
      }, delay)

      // clean up for unmount
      return () => clearTimeout(debounceHandler)
   }, [value, delay])

   return debouncedValue
}