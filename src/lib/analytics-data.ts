// Static analytics data for the video engagement dashboard

export interface VideoEngagementMetrics {
  totalViews: number;
  totalLikes: number;
  totalShares: number;
  totalComments: number;
  averageWatchTime: number; // in seconds
  watchThroughRate: number; // percentage
}

export interface HourlyEngagement {
  hour: number;
  views: number;
  likes: number;
  shares: number;
  comments: number;
}

export interface DayOfWeekEngagement {
  day: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
}

export interface PostingTimePerformance {
  hour: number;
  averageViews: number;
  averageLikes: number;
  averageShares: number;
  averageComments: number;
}

export interface UserInteractionFunnel {
  stage: string;
  percentage: number;
  count: number;
}

// Main engagement metrics
export const videoEngagementData: VideoEngagementMetrics = {
  totalViews: 125847,
  totalLikes: 8923,
  totalShares: 3421,
  totalComments: 2156,
  averageWatchTime: 127, // seconds
  watchThroughRate: 68.5, // percentage
};

// Hourly engagement data for heatmap
export const hourlyEngagementData: HourlyEngagement[] = [
  { hour: 0, views: 1200, likes: 85, shares: 32, comments: 18 },
  { hour: 1, views: 800, likes: 56, shares: 21, comments: 12 },
  { hour: 2, views: 600, likes: 42, shares: 16, comments: 8 },
  { hour: 3, views: 400, likes: 28, shares: 11, comments: 5 },
  { hour: 4, views: 300, likes: 21, shares: 8, comments: 3 },
  { hour: 5, views: 500, likes: 35, shares: 13, comments: 7 },
  { hour: 6, views: 1200, likes: 84, shares: 31, comments: 19 },
  { hour: 7, views: 2800, likes: 196, shares: 75, comments: 45 },
  { hour: 8, views: 4200, likes: 294, shares: 113, comments: 68 },
  { hour: 9, views: 5800, likes: 406, shares: 156, comments: 94 },
  { hour: 10, views: 7200, likes: 504, shares: 194, comments: 117 },
  { hour: 11, views: 8100, likes: 567, shares: 218, comments: 131 },
  { hour: 12, views: 8900, likes: 623, shares: 240, comments: 144 },
  { hour: 13, views: 8500, likes: 595, shares: 229, comments: 137 },
  { hour: 14, views: 9200, likes: 644, shares: 248, comments: 149 },
  { hour: 15, views: 9800, likes: 686, shares: 264, comments: 159 },
  { hour: 16, views: 10200, likes: 714, shares: 275, comments: 165 },
  { hour: 17, views: 10800, likes: 756, shares: 291, comments: 175 },
  { hour: 18, views: 11500, likes: 805, shares: 310, comments: 186 },
  { hour: 19, views: 12200, likes: 854, shares: 329, comments: 197 },
  { hour: 20, views: 11800, likes: 826, shares: 318, comments: 191 },
  { hour: 21, views: 11200, likes: 784, shares: 302, comments: 181 },
  { hour: 22, views: 9800, likes: 686, shares: 264, comments: 159 },
  { hour: 23, views: 1400, likes: 98, shares: 38, comments: 23 },
];

// Day of week engagement data
export const dayOfWeekData: DayOfWeekEngagement[] = [
  { day: "Monday", views: 18500, likes: 1295, shares: 498, comments: 299 },
  { day: "Tuesday", views: 19200, likes: 1344, shares: 517, comments: 310 },
  { day: "Wednesday", views: 20100, likes: 1407, shares: 541, comments: 325 },
  { day: "Thursday", views: 19800, likes: 1386, shares: 533, comments: 320 },
  { day: "Friday", views: 21500, likes: 1505, shares: 579, comments: 347 },
  { day: "Saturday", views: 16800, likes: 1176, shares: 452, comments: 271 },
  { day: "Sunday", views: 15900, likes: 1113, shares: 428, comments: 257 },
];

// Posting time vs performance correlation
export const postingTimePerformance: PostingTimePerformance[] = [
  {
    hour: 6,
    averageViews: 2800,
    averageLikes: 196,
    averageShares: 75,
    averageComments: 45,
  },
  {
    hour: 7,
    averageViews: 4200,
    averageLikes: 294,
    averageShares: 113,
    averageComments: 68,
  },
  {
    hour: 8,
    averageViews: 5800,
    averageLikes: 406,
    averageShares: 156,
    averageComments: 94,
  },
  {
    hour: 9,
    averageViews: 7200,
    averageLikes: 504,
    averageShares: 194,
    averageComments: 117,
  },
  {
    hour: 10,
    averageViews: 8100,
    averageLikes: 567,
    averageShares: 218,
    averageComments: 131,
  },
  {
    hour: 11,
    averageViews: 8900,
    averageLikes: 623,
    averageShares: 240,
    averageComments: 144,
  },
  {
    hour: 12,
    averageViews: 8500,
    averageLikes: 595,
    averageShares: 229,
    averageComments: 137,
  },
  {
    hour: 13,
    averageViews: 9200,
    averageLikes: 644,
    averageShares: 248,
    averageComments: 149,
  },
  {
    hour: 14,
    averageViews: 9800,
    averageLikes: 686,
    averageShares: 264,
    averageComments: 159,
  },
  {
    hour: 15,
    averageViews: 10200,
    averageLikes: 714,
    averageShares: 275,
    averageComments: 165,
  },
  {
    hour: 16,
    averageViews: 10800,
    averageLikes: 756,
    averageShares: 291,
    averageComments: 175,
  },
  {
    hour: 17,
    averageViews: 11500,
    averageLikes: 805,
    averageShares: 310,
    averageComments: 186,
  },
  {
    hour: 18,
    averageViews: 12200,
    averageLikes: 854,
    averageShares: 329,
    averageComments: 197,
  },
  {
    hour: 19,
    averageViews: 11800,
    averageLikes: 826,
    averageShares: 318,
    averageComments: 191,
  },
  {
    hour: 20,
    averageViews: 11200,
    averageLikes: 784,
    averageShares: 302,
    averageComments: 181,
  },
];

// User interaction funnel data
export const userInteractionFunnel: UserInteractionFunnel[] = [
  { stage: "See the video", percentage: 100, count: 125847 },
  { stage: "Start watching", percentage: 87.3, count: 109863 },
  { stage: "Watch till 50%", percentage: 72.1, count: 90734 },
  { stage: "Watch till end", percentage: 68.5, count: 86205 },
  { stage: "Like/Share/Comment", percentage: 11.5, count: 14472 },
];

// Helper function to format numbers
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

// Helper function to format time
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};
