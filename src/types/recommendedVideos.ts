
interface Default {
   url: string;
   width: number;
   height: number;
}

interface Medium {
   url: string;
   width: number;
   height: number;
}

interface High {
   url: string;
   width: number;
   height: number;
}

interface Standard {
   url: string;
   width: number;
   height: number;
}

interface Maxres {
   url: string;
   width: number;
   height: number;
}

interface Thumbnails {
   default: Default;
   medium: Medium;
   high: High;
   standard: Standard;
   maxres: Maxres;
}

interface Localized {
   title: string;
   description: string;
}

interface Snippet {
   publishedAt: Date;
   channelId: string;
   title: string;
   description: string;
   thumbnails: Thumbnails;
   channelTitle: string;
   categoryId: string;
   liveBroadcastContent: string;
   defaultLanguage: string;
   localized: Localized;
   defaultAudioLanguage: string;
}

interface ContentRating {
}

interface ContentDetails {
   duration: string;
   dimension: string;
   definition: string;
   caption: string;
   licensedContent: boolean;
   contentRating: ContentRating;
   projection: string;
}

interface Statistics {
   viewCount: string;
   likeCount: string;
   favoriteCount: string;
   commentCount: string;
}

interface Item {
   kind: string;
   etag: string;
   id: string;
   snippet: Snippet;
   contentDetails: ContentDetails;
   statistics: Statistics;
}

interface PageInfo {
   totalResults: number;
   resultsPerPage: number;
}

export interface RecommendedVideos {
   kind: string;
   etag: string;
   items: Item[];
   pageInfo: PageInfo;
}