"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SimpleVideoGallery() {
  console.log("SimpleVideoGallery is rendering");

  const videos = [
    { id: "1", title: "Morning Coffee Ritual", scene: "Kitchen" },
    { id: "2", title: "Sunset Beach Walk", scene: "Beach" },
    { id: "3", title: "Urban Street Fashion", scene: "City Street" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900">
        🎬 Simple Video Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <Card key={video.id}>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Scene: {video.scene}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
