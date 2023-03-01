

interface PageInfo {
   totalResults: number;
   resultsPerPage: number;
}

interface Id {
   kind: string;
   videoId: string;
}

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

interface Thumbnails {
   default: Default;
   medium: Medium;
   high: High;
}

interface Snippet {
   publishedAt: Date;
   channelId: string;
   title: string;
   description: string;
   thumbnails: Thumbnails;
   channelTitle: string;
   liveBroadcastContent: string;
   publishTime: Date;
}

interface Item {
   kind: string;
   etag: string;
   id: Id;
   snippet: Snippet;
}

export interface searchedVideos {
   kind: string;
   etag: string;
   nextPageToken: string;
   regionCode: string;
   pageInfo: PageInfo;
   items: Item[];
}

