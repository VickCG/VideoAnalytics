import SimpleVideoGallery from "@/components/simple-video-gallery";
import VideoGallery from "@/components/video-gallery";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Component Test Page
        </h1>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Simple Video Gallery Test
          </h2>
          <SimpleVideoGallery />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Full Video Gallery Test
          </h2>
          <VideoGallery />
        </div>
      </div>
    </div>
  );
}
