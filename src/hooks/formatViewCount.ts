export const formatViewCount = (view: string): string => {
   let viewCount: string = view
   if (viewCount.length === 4) {
      viewCount = viewCount.slice(0, 1) + 'K views'
   } else if (viewCount.length === 5) {
      viewCount = viewCount.slice(0, 2) + 'K views'
   } else if (viewCount.length === 6) {
      viewCount = viewCount.slice(0, 3) + 'K views'
   } else if (viewCount.length === 7) {
      viewCount = viewCount.slice(0, 1) + 'M views'
   } else if (viewCount.length === 8) {
      viewCount = viewCount.slice(0, 2) + 'M views'
   } else if (viewCount.length === 9) {
      viewCount = viewCount.slice(0, 3) + 'M views'
   }
   return viewCount
}