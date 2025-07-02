import VideoGallery from "@/components/video-gallery";

export default function VideoTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Video Gallery Test
        </h1>
        <VideoGallery />
      </div>
    </div>
  );
}
