// export const formatPublishDate = (date: Date): string => {
//    let publishDate: any = new Date(date)
//    let today: any = new Date()
//    let daysPassed: string =  Math.ceil((publishDate - today) / 8.64e7).toString()
//    if(daysPassed.indexOf('-') > -1) daysPassed = daysPassed.replace('-', '')

//    return daysPassed
// }

export const formatPublishDate = (date: Date): string => {
   let publishDate: any = new Date(date).getTime();
   let today: any = new Date().getTime();

   let timeSpan: number = today - publishDate;

   if (timeSpan < 0) {
      return '';
   } else if (timeSpan < 60 * 60 * 1000) {
      return Math.floor(timeSpan / (60 * 1000)) + ' minutes ago'
   } else if (timeSpan < 24 * 60 * 60 * 1000) {
      return Math.floor(timeSpan / (60 * 60 * 1000)) + ' hours ago'
   } else if (timeSpan < 7 * 24 * 60 * 60 * 1000) {
      return Math.floor(timeSpan / (24 * 60 * 60 * 1000)) + ' days ago'
   } else if (timeSpan < 30 * 24 * 60 * 60 * 1000) {
      return Math.floor(timeSpan / (7 * 24 * 60 * 60 * 1000)) + ' weeks ago'
   } else if (timeSpan < 365 * 24 * 60 * 60 * 1000) {
      return Math.floor(timeSpan / (30 * 24 * 60 * 60 * 1000)) + ' months ago'
   } else {
      return Math.floor(timeSpan / (365 * 24 * 60 * 60 * 1000)) + ' years ago'
   }
}