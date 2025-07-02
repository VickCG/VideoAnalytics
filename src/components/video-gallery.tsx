"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Play,
  Heart,
  Share2,
  MessageCircle,
  Eye,
  Clock,
  X,
} from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  scene: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  uploadDate: string;
  tags: string[];
}

const videoData: Video[] = [
  {
    id: "1",
    title: "Morning Coffee Ritual",
    description: "A peaceful morning routine with beautiful natural lighting",
    scene: "Kitchen",
    thumbnail: "https://picsum.photos/400/300?random=1",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "2:34",
    views: 125000,
    likes: 8900,
    shares: 1200,
    comments: 450,
    uploadDate: "2024-01-15",
    tags: ["lifestyle", "morning", "coffee"],
  },
  {
    id: "2",
    title: "Sunset Beach Walk",
    description: "Golden hour stroll along the coastline",
    scene: "Beach",
    thumbnail: "https://picsum.photos/400/300?random=2",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "3:12",
    views: 189000,
    likes: 12400,
    shares: 2100,
    comments: 780,
    uploadDate: "2024-01-12",
    tags: ["nature", "sunset", "beach"],
  },
  {
    id: "3",
    title: "Urban Street Fashion",
    description: "Modern street style in the city",
    scene: "City Street",
    thumbnail: "https://picsum.photos/400/300?random=3",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "1:58",
    views: 98000,
    likes: 6700,
    shares: 890,
    comments: 320,
    uploadDate: "2024-01-10",
    tags: ["fashion", "street", "urban"],
  },
  {
    id: "4",
    title: "Cherry Blossom Garden",
    description: "Spring beauty among blooming cherry blossoms",
    scene: "Garden",
    thumbnail: "https://picsum.photos/400/300?random=4",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "4:05",
    views: 245000,
    likes: 18900,
    shares: 3400,
    comments: 1200,
    uploadDate: "2024-01-08",
    tags: ["spring", "nature", "cherry-blossom"],
  },
  {
    id: "5",
    title: "Cozy Reading Corner",
    description: "Peaceful reading time with warm lighting",
    scene: "Living Room",
    thumbnail: "https://picsum.photos/400/300?random=5",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "2:47",
    views: 76000,
    likes: 5400,
    shares: 670,
    comments: 280,
    uploadDate: "2024-01-05",
    tags: ["lifestyle", "reading", "cozy"],
  },
  {
    id: "6",
    title: "Mountain Hiking Adventure",
    description: "Exploring scenic mountain trails",
    scene: "Mountain",
    thumbnail: "https://picsum.photos/400/300?random=6",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: "5:23",
    views: 167000,
    likes: 11200,
    shares: 1800,
    comments: 650,
    uploadDate: "2024-01-03",
    tags: ["adventure", "hiking", "nature"],
  },
];

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function VideoGallery() {
  console.log("VideoGallery component is rendering");

  const [selectedScene, setSelectedScene] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("views");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const scenes = [
    "all",
    ...Array.from(new Set(videoData.map((video) => video.scene))),
  ];

  const filteredVideos = videoData.filter(
    (video) => selectedScene === "all" || video.scene === selectedScene
  );

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    switch (sortBy) {
      case "views":
        return b.views - a.views;
      case "likes":
        return b.likes - a.likes;
      case "date":
        return (
          new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
        );
      default:
        return b.views - a.views;
    }
  });

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              🎬 Video Gallery
            </h2>
            <p className="text-gray-300 mt-1">
              Beautiful scenes featuring our talented creator
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedScene}
              onChange={(e) => setSelectedScene(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
            >
              {scenes.map((scene) => (
                <option
                  key={scene}
                  value={scene}
                  className="bg-gray-800 text-white"
                >
                  {scene === "all" ? "All Scenes" : scene}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
            >
              <option value="views" className="bg-gray-800 text-white">
                Sort by Views
              </option>
              <option value="likes" className="bg-gray-800 text-white">
                Sort by Likes
              </option>
              <option value="date" className="bg-gray-800 text-white">
                Sort by Date
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative">
                <video
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  className="w-full h-48 object-cover"
                  muted
                  onMouseOver={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play();
                  }}
                  onMouseOut={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.pause();
                    video.currentTime = 0;
                  }}
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-black/70 text-white border-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-black/70 text-white hover:bg-black/80 border-0"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-white overflow-hidden text-ellipsis whitespace-nowrap">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 mt-1">
                      {video.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {video.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-gray-700/50 text-gray-200 border-gray-600 text-xs"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span>{formatDate(video.uploadDate)}</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {formatNumber(video.views)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {formatNumber(video.likes)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      {formatNumber(video.shares)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {formatNumber(video.comments)}
                    </div>
                  </div>

                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                    {video.scene}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-gray-400 text-sm">
            Showing {sortedVideos.length} of {videoData.length} videos
          </p>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">
                {selectedVideo.title}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeVideoModal}
                className="hover:bg-gray-800 text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4">
              <video
                src={selectedVideo.videoUrl}
                controls
                className="w-full h-auto max-h-[60vh]"
                autoPlay
              />
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">{selectedVideo.description}</p>
                <div className="flex flex-wrap gap-1">
                  {selectedVideo.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-gray-700/50 text-gray-200 border-gray-600 text-xs"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{formatDate(selectedVideo.uploadDate)}</span>
                  <span>•</span>
                  <span>{selectedVideo.duration}</span>
                  <span>•</span>
                  <span>{formatNumber(selectedVideo.views)} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
