export const formatPublishDate = (date: Date): string => {
   let publishDate: any = new Date(date)
   let today: any = new Date()
   let daysPassed: string =  Math.ceil((publishDate - today) / 8.64e7).toString()
   if(daysPassed.indexOf('-') > -1) daysPassed = daysPassed.replace('-', '')

   return daysPassed
}