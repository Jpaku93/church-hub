export type Role = 'Admin' | 'Leader' | 'Member'

export interface User {
  id: string
  name: string
  role: Role
  email: string
}

export interface Event {
  id: string
  title: string
  date: Date
  time?: string
  ministry: string
  color: string
}

export interface Duty {
  id: string
  title: string
  date: Date
  assignedTo: string
  status: 'pending' | 'confirmed' | 'completed'
}

export interface Approval {
  id: string
  type: 'document' | 'post' | 'event'
  title: string
  submittedBy: string
  submittedAt: Date
  status: 'pending' | 'approved' | 'changes_requested'
}

export interface TimetableEntry {
  id: string
  time: string
  activity: string
  responsible: string
}

export interface Document {
  id: string
  folder: string
  title: string
  tags: string[]
  status: 'pending' | 'approved' | 'changes_requested'
  submittedBy: string
}

export interface Ministry {
  id: string
  name: string
  leader: string
  memberCount: number
  color: string
}

export interface SocialMediaAccount {
  id: string
  platform: 'instagram' | 'facebook' | 'youtube'
  name: string
  linked: boolean
}

export interface ScheduledPost {
  id: string
  platform: 'instagram' | 'facebook' | 'youtube'
  type: 'status' | 'reel' | 'image'
  title: string
  scheduledAt: Date
  status: 'draft' | 'scheduled' | 'published'
}

export interface AnalyticsData {
  // Engagement Metrics
  totalEngagement: number
  avgEngagementRate: number
  engagementByType: { type: string; likes: number; comments: number; shares: number; saves: number }[]
  engagementTrend: { date: string; rate: number; total: number }[]
  engagementByPlatform: { platform: string; rate: number; total: number }[]
  
  // Reach and Awareness
  totalReach: number
  totalImpressions: number
  reachByPlatform: { platform: string; reach: number; impressions: number }[]
  followerGrowth: { date: string; followers: number; growth: number }[]
  audienceDemographics: { age: string; percentage: number }[]
  
  // Content Performance
  totalScheduled: number
  published30d: number
  scheduledByPlatform: { platform: string; scheduled: number; published: number }[]
  contentMix: { type: string; count: number; avgEngagement: number }[]
  topPosts: {
    title: string
    platform: string
    type: string
    reach: number
    impressions: number
    engagement: number
    engagementRate: number
    likes: number
    comments: number
    shares: number
    saves: number
  }[]
  optimalPostingTimes: { hour: string; engagement: number }[]
  topTags: {
    tag: string
    usage: number
    reach: number
    engagement: number
    engagementRate: number
  }[]
}

export interface Notification {
  id: string
  type: 'duty' | 'deadline' | 'roster' | 'approval'
  title: string
  message: string
  date: Date
  read: boolean
}
