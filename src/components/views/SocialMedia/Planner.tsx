import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../ui/dialog'
import { Input } from '../../ui/input'
import { Select } from '../../ui/select'
import { Plus, FileText } from 'lucide-react'
import { useAuth } from '../../../contexts/AuthContext'
import { ScheduledPost } from '../../../types'
import { format } from 'date-fns'

const scheduledPosts: ScheduledPost[] = [
  {
    id: '1',
    platform: 'instagram',
    type: 'image',
    title: 'Sunday Service Announcement',
    scheduledAt: new Date(2024, 0, 13, 9, 0),
    status: 'scheduled',
  },
  {
    id: '2',
    platform: 'facebook',
    type: 'status',
    title: 'Weekly Update',
    scheduledAt: new Date(2024, 0, 14, 10, 0),
    status: 'scheduled',
  },
  {
    id: '3',
    platform: 'youtube',
    type: 'reel',
    title: 'Sermon Highlights',
    scheduledAt: new Date(2024, 0, 15, 12, 0),
    status: 'draft',
  },
]

export function SocialMediaPlanner() {
  const { isMember } = useAuth()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    platform: 'instagram',
    type: 'status',
    title: '',
    scheduledAt: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Schedule post:', formData)
    setIsDialogOpen(false)
    setFormData({ platform: 'instagram', type: 'status', title: '', scheduledAt: '' })
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold">Content Planner</h3>
          <p className="text-sm lg:text-base text-muted-foreground">Schedule and manage your social media posts</p>
        </div>
        {!isMember && (
          <Button size="sm" className="w-full sm:w-auto" onClick={() => setIsDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Post
          </Button>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {scheduledPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'}>
                  {post.status}
                </Badge>
              </div>
              <CardDescription>
                {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)} • {post.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Scheduled: {format(post.scheduledAt, 'MMM d, yyyy h:mm a')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {!isMember && (
        <Card>
          <CardHeader>
            <CardTitle>Drafts</CardTitle>
            <CardDescription>Manage your draft posts</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Manage Drafts
            </Button>
          </CardContent>
        </Card>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent onClose={() => setIsDialogOpen(false)}>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Schedule Post</DialogTitle>
              <DialogDescription>Create and schedule a new social media post</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Platform</label>
                <Select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                >
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="youtube">YouTube</option>
                </Select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Post Type</label>
                <Select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="status">Status</option>
                  <option value="reel">Reel/Short</option>
                  <option value="image">Image</option>
                </Select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter post title"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Schedule Date & Time</label>
                <Input
                  type="datetime-local"
                  value={formData.scheduledAt}
                  onChange={(e) => setFormData({ ...formData, scheduledAt: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Schedule Post</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

