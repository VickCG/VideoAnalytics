"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  videoEngagementData,
  hourlyEngagementData,
  dayOfWeekData,
  postingTimePerformance,
  userInteractionFunnel,
  formatNumber,
  formatTime,
} from "@/lib/analytics-data";
import VideoGallery from "./video-gallery";
import SimpleVideoGallery from "./simple-video-gallery";
import {
  Zap,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Clock,
  Users,
  Play,
  MapPin,
  Hash,
  TrendingDown,
  Globe,
  Target,
  BarChart3,
} from "lucide-react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900">
      {/* Modern Dark Header with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-sm font-medium border border-white/20">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white">Live Analytics Dashboard</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              GEN Video Analytics
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive insights into video engagement and performance with
              real-time data visualization
            </p>
          </div>
        </div>
        {/* Animated Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full -translate-x-32 -translate-y-32 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* 1. Modern Dark Video Engagement Overview */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl shadow-lg">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">
                Engagement Overview
              </h2>
              <p className="text-gray-300 text-lg">
                Real-time performance metrics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Eye className="w-5 h-5 text-blue-400" />
                    </div>
                    Total Views
                  </CardTitle>
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-blue-400 mb-3">
                  {formatNumber(videoEngagementData.totalViews)}
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                  +12.5% from last week
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-green-500/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Heart className="w-5 h-5 text-green-400" />
                    </div>
                    Total Likes
                  </CardTitle>
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-400 mb-3">
                  {formatNumber(videoEngagementData.totalLikes)}
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30">
                  +8.3% from last week
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Share2 className="w-5 h-5 text-purple-400" />
                    </div>
                    Total Shares
                  </CardTitle>
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-purple-400 mb-3">
                  {formatNumber(videoEngagementData.totalShares)}
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30">
                  +15.2% from last week
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-orange-500/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    Total Comments
                  </CardTitle>
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-orange-400 mb-3">
                  {formatNumber(videoEngagementData.totalComments)}
                </div>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 hover:bg-orange-500/30">
                  +6.7% from last week
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-indigo-500/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-3">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                      <Clock className="w-5 h-5 text-indigo-400" />
                    </div>
                    Avg Watch Time
                  </CardTitle>
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-indigo-400 mb-3">
                  {formatTime(videoEngagementData.averageWatchTime)}
                </div>
                <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30">
                  +5.2% from last week
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-red-500/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-300 flex items-center gap-3">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <Users className="w-5 h-5 text-red-400" />
                    </div>
                    Watch-through Rate
                  </CardTitle>
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-red-400" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-red-400 mb-3">
                  {videoEngagementData.watchThroughRate}%
                </div>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30">
                  +2.1% from last week
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 2. Modern Dark Time-based Analytics */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">Time Analytics</h2>
              <p className="text-gray-300 text-lg">
                Engagement patterns across time
              </p>
            </div>
          </div>

          {/* Peak Engagement Times */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white">
                Peak Engagement Times
              </CardTitle>
              <CardDescription className="text-gray-300">
                When users most view, like, or share videos
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={hourlyEngagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="hour" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none",
                      color: "#F9FAFB",
                    }}
                    labelStyle={{
                      color: "#9CA3AF",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    itemStyle={{
                      color: "#F9FAFB",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  />
                  <Bar
                    dataKey="views"
                    fill="#3B82F6"
                    name="Views"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                  <Bar
                    dataKey="likes"
                    fill="#10B981"
                    name="Likes"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                  <Bar
                    dataKey="shares"
                    fill="#8B5CF6"
                    name="Shares"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                  <Bar
                    dataKey="comments"
                    fill="#F59E0B"
                    name="Comments"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Day of Week Trends */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white">
                Day of Week Trends
              </CardTitle>
              <CardDescription className="text-gray-300">
                Engagement trends by weekday/weekend
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={dayOfWeekData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none",
                      color: "#F9FAFB",
                    }}
                    labelStyle={{
                      color: "#9CA3AF",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    itemStyle={{
                      color: "#F9FAFB",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#3B82F6"
                    strokeWidth={4}
                    name="Views"
                    dot={{
                      fill: "#3B82F6",
                      strokeWidth: 3,
                      r: 8,
                      stroke: "#3B82F6",
                      className: "hover:r-10 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 12,
                      stroke: "#3B82F6",
                      strokeWidth: 4,
                      fill: "#3B82F6",
                      className: "animate-pulse",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="likes"
                    stroke="#10B981"
                    strokeWidth={4}
                    name="Likes"
                    dot={{
                      fill: "#10B981",
                      strokeWidth: 3,
                      r: 8,
                      stroke: "#10B981",
                      className: "hover:r-10 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 12,
                      stroke: "#10B981",
                      strokeWidth: 4,
                      fill: "#10B981",
                      className: "animate-pulse",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="shares"
                    stroke="#8B5CF6"
                    strokeWidth={4}
                    name="Shares"
                    dot={{
                      fill: "#8B5CF6",
                      strokeWidth: 3,
                      r: 8,
                      stroke: "#8B5CF6",
                      className: "hover:r-10 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 12,
                      stroke: "#8B5CF6",
                      strokeWidth: 4,
                      fill: "#8B5CF6",
                      className: "animate-pulse",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="comments"
                    stroke="#F59E0B"
                    strokeWidth={4}
                    name="Comments"
                    dot={{
                      fill: "#F59E0B",
                      strokeWidth: 3,
                      r: 8,
                      stroke: "#F59E0B",
                      className: "hover:r-10 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 12,
                      stroke: "#F59E0B",
                      strokeWidth: 4,
                      fill: "#F59E0B",
                      className: "animate-pulse",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Posting Time vs Performance */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white">
                Posting Time Performance
              </CardTitle>
              <CardDescription className="text-gray-300">
                How post time affects performance
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={postingTimePerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="hour" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none",
                      color: "#F9FAFB",
                    }}
                    labelStyle={{
                      color: "#9CA3AF",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    itemStyle={{
                      color: "#F9FAFB",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  />
                  <Bar
                    dataKey="averageViews"
                    fill="#3B82F6"
                    name="Avg Views"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                  <Bar
                    dataKey="averageLikes"
                    fill="#10B981"
                    name="Avg Likes"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                  <Bar
                    dataKey="averageShares"
                    fill="#8B5CF6"
                    name="Avg Shares"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                  <Bar
                    dataKey="averageComments"
                    fill="#F59E0B"
                    name="Avg Comments"
                    radius={[6, 6, 0, 0]}
                    className="hover:opacity-80 transition-opacity duration-200"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        {/* 3. Modern Dark User Interaction Funnel */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">User Journey</h2>
              <p className="text-gray-300 text-lg">
                Conversion funnel analysis & behavioral insights
              </p>
            </div>
          </div>

          {/* User Interaction Funnel */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white">
                User Interaction Funnel
              </CardTitle>
              <CardDescription className="text-gray-300">
                Percentage of users at each stage of the funnel
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {userInteractionFunnel.map((stage, index) => (
                <div key={stage.stage} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-xl">
                      {stage.stage}
                    </span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        {stage.percentage}%
                      </div>
                      <div className="text-sm text-gray-400">
                        {formatNumber(stage.count)} users
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${stage.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Drop-off Points Analysis */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-red-900/50 to-pink-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white">
                Drop-off Points Analysis
              </CardTitle>
              <CardDescription className="text-gray-300">
                Where users lose interest and abandon content
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Video Time Stamps */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    Video Time Stamps
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">0-30 seconds</span>
                      <span className="text-red-400 font-semibold">
                        15% drop-off
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">30-60 seconds</span>
                      <span className="text-orange-400 font-semibold">
                        8% drop-off
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">1-2 minutes</span>
                      <span className="text-yellow-400 font-semibold">
                        12% drop-off
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">2-3 minutes</span>
                      <span className="text-green-400 font-semibold">
                        5% drop-off
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Type Drop-offs */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-red-400" />
                    Content Type Drop-offs
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Tutorial Videos</span>
                      <span className="text-green-400 font-semibold">
                        Low drop-off
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Lifestyle Content</span>
                      <span className="text-yellow-400 font-semibold">
                        Medium drop-off
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Product Reviews</span>
                      <span className="text-orange-400 font-semibold">
                        High drop-off
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Entertainment</span>
                      <span className="text-red-400 font-semibold">
                        Very high drop-off
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* High-Retention Content Analysis */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white">
                High-Retention Content
              </CardTitle>
              <CardDescription className="text-gray-300">
                What keeps users watching and engaged
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Optimal Length */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    Optimal Length
                  </h3>
                  <div className="space-y-3">
                    <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                      <div className="text-2xl font-bold text-green-400">
                        2-3 min
                      </div>
                      <div className="text-sm text-gray-300">
                        Peak retention
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-semibold text-gray-300">
                        1-2 min
                      </div>
                      <div className="text-sm text-gray-400">
                        Good retention
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-lg font-semibold text-gray-300">
                        3-5 min
                      </div>
                      <div className="text-sm text-gray-400">
                        Declining retention
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Formats */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Play className="w-5 h-5 text-green-400" />
                    Best Formats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      <span className="text-gray-300">Story-driven</span>
                      <span className="text-green-400 font-semibold">
                        95% retention
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">How-to guides</span>
                      <span className="text-gray-300 font-semibold">
                        87% retention
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Behind-the-scenes</span>
                      <span className="text-gray-300 font-semibold">
                        82% retention
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Q&A sessions</span>
                      <span className="text-gray-300 font-semibold">
                        78% retention
                      </span>
                    </div>
                  </div>
                </div>

                {/* Engaging Themes */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-green-400" />
                    Engaging Themes
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      <span className="text-gray-300">Personal stories</span>
                      <span className="text-green-400 font-semibold">
                        High engagement
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Educational content</span>
                      <span className="text-gray-300 font-semibold">
                        Medium engagement
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Product reviews</span>
                      <span className="text-gray-300 font-semibold">
                        Low engagement
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Trending topics</span>
                      <span className="text-gray-300 font-semibold">
                        Variable engagement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time & Device Analysis */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white">
                Time & Device Analysis
              </CardTitle>
              <CardDescription className="text-gray-300">
                Engagement patterns by time and device usage
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Time-based Engagement */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    Peak Engagement Times
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <span className="text-gray-300">Weekdays 7-9 PM</span>
                      <span className="text-blue-400 font-semibold">
                        Peak hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Weekends 2-4 PM</span>
                      <span className="text-gray-300 font-semibold">
                        High engagement
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Lunch hours 12-2 PM</span>
                      <span className="text-gray-300 font-semibold">
                        Medium engagement
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Late night 10-12 AM</span>
                      <span className="text-gray-300 font-semibold">
                        Low engagement
                      </span>
                    </div>
                  </div>
                </div>

                {/* Device-specific Behaviors */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    Device-specific Behaviors
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <span className="text-gray-300">Mobile users</span>
                      <span className="text-blue-400 font-semibold">
                        Shorter attention span
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Desktop users</span>
                      <span className="text-gray-300 font-semibold">
                        Longer watch time
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Tablet users</span>
                      <span className="text-gray-300 font-semibold">
                        Medium engagement
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                      <span className="text-gray-300">Smart TV users</span>
                      <span className="text-gray-300 font-semibold">
                        Highest retention
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Insights */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  Location-based Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">North America</div>
                    <div className="text-lg font-semibold text-white">
                      Peak: 8-10 PM EST
                    </div>
                    <div className="text-sm text-gray-300">
                      High engagement with lifestyle content
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Europe</div>
                    <div className="text-lg font-semibold text-white">
                      Peak: 7-9 PM CET
                    </div>
                    <div className="text-sm text-gray-300">
                      Prefers educational content
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400">Asia Pacific</div>
                    <div className="text-lg font-semibold text-white">
                      Peak: 6-8 PM JST
                    </div>
                    <div className="text-sm text-gray-300">
                      High mobile engagement
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 4. Hashtag Analytics */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg">
              <Hash className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">
                Hashtag Analytics
              </h2>
              <p className="text-gray-300 text-lg">
                Trend analysis & hashtag performance insights
              </p>
            </div>
          </div>

          {/* Trend Chart: Views over time */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-pink-900/50 to-purple-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Hashtag Trend Chart
              </CardTitle>
              <CardDescription className="text-gray-300">
                Views over time for top hashtags
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={[
                    {
                      day: "Mon",
                      lifestyle: 12000,
                      fitness: 8900,
                      beauty: 6700,
                      food: 5400,
                      travel: 4200,
                    },
                    {
                      day: "Tue",
                      lifestyle: 13500,
                      fitness: 9200,
                      beauty: 7100,
                      food: 5800,
                      travel: 4500,
                    },
                    {
                      day: "Wed",
                      lifestyle: 14200,
                      fitness: 9800,
                      beauty: 7500,
                      food: 6200,
                      travel: 4800,
                    },
                    {
                      day: "Thu",
                      lifestyle: 15800,
                      fitness: 10500,
                      beauty: 8200,
                      food: 6800,
                      travel: 5200,
                    },
                    {
                      day: "Fri",
                      lifestyle: 17200,
                      fitness: 11800,
                      beauty: 8900,
                      food: 7400,
                      travel: 5800,
                    },
                    {
                      day: "Sat",
                      lifestyle: 18900,
                      fitness: 13200,
                      beauty: 9600,
                      food: 8100,
                      travel: 6500,
                    },
                    {
                      day: "Sun",
                      lifestyle: 16500,
                      fitness: 11500,
                      beauty: 8300,
                      food: 7200,
                      travel: 5900,
                    },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none",
                      color: "#F9FAFB",
                    }}
                    labelStyle={{
                      color: "#9CA3AF",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                    itemStyle={{
                      color: "#F9FAFB",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="lifestyle"
                    stroke="#EC4899"
                    strokeWidth={3}
                    name="#lifestyle"
                    dot={{
                      fill: "#EC4899",
                      strokeWidth: 3,
                      r: 6,
                      stroke: "#EC4899",
                      className: "hover:r-8 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 10,
                      stroke: "#EC4899",
                      strokeWidth: 4,
                      fill: "#EC4899",
                      className: "animate-pulse",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="fitness"
                    stroke="#10B981"
                    strokeWidth={3}
                    name="#fitness"
                    dot={{
                      fill: "#10B981",
                      strokeWidth: 3,
                      r: 6,
                      stroke: "#10B981",
                      className: "hover:r-8 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 10,
                      stroke: "#10B981",
                      strokeWidth: 4,
                      fill: "#10B981",
                      className: "animate-pulse",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="beauty"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    name="#beauty"
                    dot={{
                      fill: "#F59E0B",
                      strokeWidth: 3,
                      r: 6,
                      stroke: "#F59E0B",
                      className: "hover:r-8 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 10,
                      stroke: "#F59E0B",
                      strokeWidth: 4,
                      fill: "#F59E0B",
                      className: "animate-pulse",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="food"
                    stroke="#EF4444"
                    strokeWidth={3}
                    name="#food"
                    dot={{
                      fill: "#EF4444",
                      strokeWidth: 3,
                      r: 6,
                      stroke: "#EF4444",
                      className: "hover:r-8 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 10,
                      stroke: "#EF4444",
                      strokeWidth: 4,
                      fill: "#EF4444",
                      className: "animate-pulse",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="travel"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    name="#travel"
                    dot={{
                      fill: "#3B82F6",
                      strokeWidth: 3,
                      r: 6,
                      stroke: "#3B82F6",
                      className: "hover:r-8 transition-all duration-200",
                    }}
                    activeDot={{
                      r: 10,
                      stroke: "#3B82F6",
                      strokeWidth: 4,
                      fill: "#3B82F6",
                      className: "animate-pulse",
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Trending Hashtags */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Top 5 Trending Hashtags
              </CardTitle>
              <CardDescription className="text-gray-300">
                Most popular hashtags this week
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                {[
                  {
                    hashtag: "#lifestyle",
                    views: "2.4M",
                    growth: "+15.2%",
                    category: "Lifestyle",
                  },
                  {
                    hashtag: "#fitness",
                    views: "1.8M",
                    growth: "+12.8%",
                    category: "Fitness",
                  },
                  {
                    hashtag: "#beauty",
                    views: "1.5M",
                    growth: "+8.9%",
                    category: "Beauty",
                  },
                  {
                    hashtag: "#food",
                    views: "1.2M",
                    growth: "+6.4%",
                    category: "Food",
                  },
                  {
                    hashtag: "#travel",
                    views: "980K",
                    growth: "+4.2%",
                    category: "Travel",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-gray-400">
                        #{index + 1}
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">
                          {item.hashtag}
                        </div>
                        <div className="text-sm text-gray-400">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">
                        {item.views}
                      </div>
                      <div className="text-sm text-green-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {item.growth}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard: Top-performing creators & videos */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Target className="w-6 h-6" />
                Top-performing Creators & Videos
              </CardTitle>
              <CardDescription className="text-gray-300">
                Leaderboard by hashtag performance
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top Creators */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    Top Creators
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Sarah Chen",
                        hashtag: "#lifestyle",
                        followers: "2.1M",
                        engagement: "8.5%",
                      },
                      {
                        name: "Mike Johnson",
                        hashtag: "#fitness",
                        followers: "1.8M",
                        engagement: "7.2%",
                      },
                      {
                        name: "Emma Davis",
                        hashtag: "#beauty",
                        followers: "1.5M",
                        engagement: "6.8%",
                      },
                      {
                        name: "Alex Wong",
                        hashtag: "#food",
                        followers: "1.2M",
                        engagement: "5.9%",
                      },
                    ].map((creator, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-white font-medium">
                              {creator.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {creator.hashtag}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-300">
                            {creator.followers}
                          </div>
                          <div className="text-xs text-green-400">
                            {creator.engagement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Videos */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Play className="w-5 h-5 text-blue-400" />
                    Top Videos
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Morning Routine",
                        hashtag: "#lifestyle",
                        views: "850K",
                        likes: "45K",
                      },
                      {
                        title: "Workout Challenge",
                        hashtag: "#fitness",
                        views: "720K",
                        likes: "38K",
                      },
                      {
                        title: "Skincare Tips",
                        hashtag: "#beauty",
                        views: "680K",
                        likes: "32K",
                      },
                      {
                        title: "Quick Recipe",
                        hashtag: "#food",
                        views: "590K",
                        likes: "28K",
                      },
                    ].map((video, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-white font-medium">
                              {video.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              {video.hashtag}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-300">
                            {video.views}
                          </div>
                          <div className="text-xs text-red-400">
                            ❤️ {video.likes}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hashtag Clusters */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border-b border-gray-600/50">
              <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Hashtag Clusters
              </CardTitle>
              <CardDescription className="text-gray-300">
                AI-based clustering to group related hashtags
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Fitness Cluster */}
                <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    Fitness & Health
                  </h3>
                  <div className="space-y-2">
                    {[
                      "#gymtok",
                      "#fitlife",
                      "#workout",
                      "#health",
                      "#motivation",
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-300">{tag}</span>
                        <span className="text-green-400 text-sm">
                          +{Math.floor(Math.random() * 20) + 10}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifestyle Cluster */}
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-purple-400" />
                    Lifestyle & Fashion
                  </h3>
                  <div className="space-y-2">
                    {[
                      "#lifestyle",
                      "#fashion",
                      "#ootd",
                      "#style",
                      "#trending",
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-300">{tag}</span>
                        <span className="text-purple-400 text-sm">
                          +{Math.floor(Math.random() * 20) + 10}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Food Cluster */}
                <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-orange-400" />
                    Food & Cooking
                  </h3>
                  <div className="space-y-2">
                    {[
                      "#food",
                      "#cooking",
                      "#recipe",
                      "#foodie",
                      "#delicious",
                    ].map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-300">{tag}</span>
                        <span className="text-orange-400 text-sm">
                          +{Math.floor(Math.random() * 20) + 10}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimal Posting Time & Geo Heatmap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Optimal Posting Time */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
              <CardHeader className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-b border-gray-600/50">
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Optimal Posting Time
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Best times to use hashtags for maximum reach
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    {
                      hashtag: "#lifestyle",
                      time: "7-9 PM",
                      day: "Weekdays",
                      reach: "High",
                    },
                    {
                      hashtag: "#fitness",
                      time: "6-8 AM",
                      day: "Weekdays",
                      reach: "Very High",
                    },
                    {
                      hashtag: "#beauty",
                      time: "8-10 PM",
                      day: "Weekends",
                      reach: "High",
                    },
                    {
                      hashtag: "#food",
                      time: "12-2 PM",
                      day: "Daily",
                      reach: "Medium",
                    },
                    {
                      hashtag: "#travel",
                      time: "6-8 PM",
                      day: "Weekends",
                      reach: "High",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                    >
                      <div>
                        <div className="text-white font-medium">
                          {item.hashtag}
                        </div>
                        <div className="text-sm text-gray-400">{item.day}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-semibold">
                          {item.time}
                        </div>
                        <div className="text-sm text-gray-300">
                          {item.reach} reach
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Geo Heatmap */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50">
              <CardHeader className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-gray-600/50">
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  Geographic Heatmap
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Where hashtags are most used and viewed
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    {
                      region: "North America",
                      hashtag: "#lifestyle",
                      usage: "45%",
                      growth: "+12%",
                    },
                    {
                      region: "Europe",
                      hashtag: "#fitness",
                      usage: "28%",
                      growth: "+8%",
                    },
                    {
                      region: "Asia Pacific",
                      hashtag: "#beauty",
                      usage: "18%",
                      growth: "+15%",
                    },
                    {
                      region: "Latin America",
                      hashtag: "#food",
                      usage: "9%",
                      growth: "+6%",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                    >
                      <div>
                        <div className="text-white font-medium">
                          {item.region}
                        </div>
                        <div className="text-sm text-gray-400">
                          {item.hashtag}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-semibold">
                          {item.usage}
                        </div>
                        <div className="text-sm text-green-400">
                          {item.growth}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                  <div className="text-center">
                    <div className="text-white font-semibold mb-2">
                      Global Distribution
                    </div>
                    <div className="text-sm text-gray-300">
                      Interactive heatmap showing hashtag usage across regions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Gallery */}
        <VideoGallery />
      </div>
    </div>
  );
}
