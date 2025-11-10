import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { AnalyticsData } from '../../../types'
import { TrendingUp, Users, Heart } from 'lucide-react'

const analyticsData: AnalyticsData = {
  // Engagement Metrics
  totalEngagement: 12450,
  avgEngagementRate: 8.5,
  engagementByType: [
    { type: 'Image', likes: 3200, comments: 450, shares: 280, saves: 150 },
    { type: 'Reel', likes: 5100, comments: 680, shares: 420, saves: 890 },
    { type: 'Status', likes: 1800, comments: 320, shares: 190, saves: 20 },
  ],
  engagementTrend: [
    { date: 'Week 1', rate: 7.2, total: 2850 },
    { date: 'Week 2', rate: 8.1, total: 3100 },
    { date: 'Week 3', rate: 8.5, total: 3250 },
    { date: 'Week 4', rate: 9.2, total: 3250 },
  ],
  engagementByPlatform: [
    { platform: 'Instagram', rate: 9.8, total: 6800 },
    { platform: 'Facebook', rate: 7.2, total: 4200 },
    { platform: 'YouTube', rate: 6.5, total: 1450 },
  ],
  
  // Reach and Awareness
  totalReach: 125000,
  totalImpressions: 185000,
  reachByPlatform: [
    { platform: 'Instagram', reach: 68000, impressions: 95000 },
    { platform: 'Facebook', reach: 42000, impressions: 65000 },
    { platform: 'YouTube', reach: 15000, impressions: 25000 },
  ],
  followerGrowth: [
    { date: 'Jan 1', followers: 1250, growth: 0 },
    { date: 'Jan 8', followers: 1320, growth: 70 },
    { date: 'Jan 15', followers: 1410, growth: 90 },
    { date: 'Jan 22', followers: 1520, growth: 110 },
    { date: 'Jan 29', followers: 1640, growth: 120 },
  ],
  audienceDemographics: [
    { age: '18-24', percentage: 25 },
    { age: '25-34', percentage: 35 },
    { age: '35-44', percentage: 22 },
    { age: '45-54', percentage: 12 },
    { age: '55+', percentage: 6 },
  ],
  
  // Content Performance
  totalScheduled: 45,
  published30d: 38,
  scheduledByPlatform: [
    { platform: 'Instagram', scheduled: 20, published: 18 },
    { platform: 'Facebook', scheduled: 15, published: 12 },
    { platform: 'YouTube', scheduled: 10, published: 8 },
  ],
  contentMix: [
    { type: 'Image', count: 20, avgEngagement: 7.8 },
    { type: 'Reel', count: 15, avgEngagement: 12.5 },
    { type: 'Status', count: 10, avgEngagement: 5.2 },
  ],
  topPosts: [
    { title: 'Sunday Service Highlights', platform: 'Instagram', type: 'Reel', reach: 12500, impressions: 18500, engagement: 1562, engagementRate: 12.5, likes: 1200, comments: 180, shares: 120, saves: 62 },
    { title: 'Weekly Announcements', platform: 'Facebook', type: 'Image', reach: 9800, impressions: 14200, engagement: 999, engagementRate: 10.2, likes: 750, comments: 120, shares: 89, saves: 40 },
    { title: 'Sermon Preview', platform: 'YouTube', type: 'Reel', reach: 15200, impressions: 22100, engagement: 1489, engagementRate: 9.8, likes: 1100, comments: 250, shares: 89, saves: 50 },
    { title: 'Community Event', platform: 'Instagram', type: 'Image', reach: 10800, impressions: 15200, engagement: 1220, engagementRate: 11.3, likes: 950, comments: 150, shares: 80, saves: 40 },
  ],
  optimalPostingTimes: [
    { hour: '8 AM', engagement: 450 },
    { hour: '10 AM', engagement: 680 },
    { hour: '12 PM', engagement: 520 },
    { hour: '2 PM', engagement: 380 },
    { hour: '4 PM', engagement: 620 },
    { hour: '6 PM', engagement: 890 },
    { hour: '8 PM', engagement: 750 },
  ],
  topTags: [
    { tag: '#SundayService', usage: 18, reach: 28500, engagement: 3420, engagementRate: 12.0 },
    { tag: '#ChurchLife', usage: 15, reach: 22100, engagement: 2652, engagementRate: 12.0 },
    { tag: '#Faith', usage: 12, reach: 18900, engagement: 2079, engagementRate: 11.0 },
    { tag: '#Community', usage: 10, reach: 15200, engagement: 1824, engagementRate: 12.0 },
    { tag: '#Worship', usage: 14, reach: 19800, engagement: 2178, engagementRate: 11.0 },
    { tag: '#Prayer', usage: 8, reach: 11200, engagement: 1344, engagementRate: 12.0 },
  ],
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b']

export function SocialMediaAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold">Analytics Dashboard</h3>
        <p className="text-muted-foreground">Social media performance overview</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalReach.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Unique accounts reached</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.totalEngagement.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All interactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.avgEngagementRate}%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {analyticsData.followerGrowth[analyticsData.followerGrowth.length - 1].followers.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +{analyticsData.followerGrowth[analyticsData.followerGrowth.length - 1].growth} this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Metrics */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Engagement Metrics</h4>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Engagement Rate Trend</CardTitle>
              <CardDescription>Weekly engagement rate over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={analyticsData.engagementTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="rate" stroke="#3b82f6" strokeWidth={2} name="Engagement Rate (%)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Engagement by Platform</CardTitle>
              <CardDescription>Average engagement rate by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={analyticsData.engagementByPlatform}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="platform" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="rate" fill="#10b981" name="Engagement Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reach and Awareness */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Reach and Awareness</h4>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Reach by Platform</CardTitle>
              <CardDescription>Reach across different platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={analyticsData.reachByPlatform}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="platform" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reach" fill="#3b82f6" name="Reach" />
                  <Bar dataKey="impressions" fill="#8b5cf6" name="Impressions" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follower Growth</CardTitle>
              <CardDescription>Weekly follower count</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={analyticsData.followerGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="followers" stroke="#8b5cf6" strokeWidth={2} name="Followers" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content Performance */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold">Content Performance</h4>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Content Mix</CardTitle>
              <CardDescription>Distribution by post type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={analyticsData.contentMix}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {analyticsData.contentMix.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimal Posting Times</CardTitle>
              <CardDescription>Average engagement by hour</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={analyticsData.optimalPostingTimes}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="engagement" fill="#f59e0b" name="Engagement" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Tags */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Tags</CardTitle>
            <CardDescription>Best performing hashtags by engagement and reach</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium">Tag</th>
                    <th className="text-left py-3 px-4 font-medium">Usage</th>
                    <th className="text-left py-3 px-4 font-medium">Reach</th>
                    <th className="text-left py-3 px-4 font-medium">Engagement</th>
                    <th className="text-left py-3 px-4 font-medium">Eng. Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.topTags.map((tag, index) => (
                    <tr key={index} className="border-b hover:bg-accent/50">
                      <td className="py-3 px-4 font-medium text-blue-600">{tag.tag}</td>
                      <td className="py-3 px-4">{tag.usage}</td>
                      <td className="py-3 px-4">{tag.reach.toLocaleString()}</td>
                      <td className="py-3 px-4">{tag.engagement.toLocaleString()}</td>
                      <td className="py-3 px-4 font-semibold">{tag.engagementRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Posts</CardTitle>
          <CardDescription>Best performing content by engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Title</th>
                  <th className="text-left py-3 px-4 font-medium">Platform</th>
                  <th className="text-left py-3 px-4 font-medium">Reach</th>
                  <th className="text-left py-3 px-4 font-medium">Engagement</th>
                  <th className="text-left py-3 px-4 font-medium">Eng. Rate</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.topPosts.map((post, index) => (
                  <tr key={index} className="border-b hover:bg-accent/50">
                    <td className="py-3 px-4 font-medium">{post.title}</td>
                    <td className="py-3 px-4">{post.platform}</td>
                    <td className="py-3 px-4">{post.reach.toLocaleString()}</td>
                    <td className="py-3 px-4">{post.engagement.toLocaleString()}</td>
                    <td className="py-3 px-4 font-semibold">{post.engagementRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
