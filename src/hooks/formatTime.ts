export const formatTime = (time: string): string => {
   const match: any = time.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/)
   const hours: number = parseInt(match[1] || 0)
   const minutes: number = parseInt(match[2] || 0)
   const seconds: number = parseInt(match[3] || 0)
   let output: string = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

   if(output.startsWith('00:')) output = output.slice(3)
   if(output.startsWith('00:00:')) output = output.slice(6)

   return output
 }