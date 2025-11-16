import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Calendar, Clock, FileText, Share2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { format } from 'date-fns'
import { Event, Duty, Approval } from '../../types'

// Mock data
const upcomingEvents: Event[] = [
  { id: '1', title: 'Sunday Service', date: new Date(2024, 0, 14), time: '10:00 AM', ministry: 'Worship', color: '#3b82f6' },
  { id: '2', title: 'Youth Group', date: new Date(2024, 0, 16), time: '7:00 PM', ministry: 'Youth', color: '#10b981' },
  { id: '3', title: 'Prayer Meeting', date: new Date(2024, 0, 18), time: '6:30 PM', ministry: 'Prayer', color: '#f59e0b' },
]

const todaysDuties: Duty[] = [
  { id: '1', title: 'Sound System Setup', date: new Date(), assignedTo: 'John Doe', status: 'confirmed' },
  { id: '2', title: 'Welcome Team', date: new Date(), assignedTo: 'Jane Smith', status: 'pending' },
]

const pendingApprovals: Approval[] = [
  { id: '1', type: 'document', title: 'Easter Service Poster', submittedBy: 'Sarah Johnson', submittedAt: new Date(2024, 0, 10), status: 'pending' },
  { id: '2', type: 'post', title: 'Weekly Announcement', submittedBy: 'Mike Brown', submittedAt: new Date(2024, 0, 11), status: 'pending' },
]

export function Dashboard() {
  const { isMember } = useAuth()

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Duties</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todaysDuties.length}</div>
            <p className="text-xs text-muted-foreground">Assigned tasks</p>
          </CardContent>
        </Card>
        {!isMember && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingApprovals.length}</div>
              <p className="text-xs text-muted-foreground">Awaiting review</p>
            </CardContent>
          </Card>
        )}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quick Links</CardTitle>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Main sections</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events scheduled for the next week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: event.color }} />
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {format(event.date, 'MMM d, yyyy')} • {event.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{event.ministry}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Duties</CardTitle>
            <CardDescription>Your assigned tasks for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaysDuties.map((duty) => (
                <div key={duty.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{duty.title}</p>
                    <p className="text-sm text-muted-foreground">{duty.assignedTo}</p>
                  </div>
                  {duty.status === 'confirmed' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {!isMember && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>Items awaiting your review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <div key={approval.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{approval.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {approval.type} • {approval.submittedBy} • {format(approval.submittedAt, 'MMM d')}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">Approve</Button>
                    <Button size="sm" variant="outline">Request Changes</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
          <CardDescription>Navigate to main sections</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
            <Button variant="outline" className="flex flex-col h-auto py-3 lg:py-4">
              <Calendar className="h-5 w-5 lg:h-6 lg:w-6 mb-1 lg:mb-2" />
              <span className="text-xs lg:text-sm">Calendar</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-auto py-3 lg:py-4">
              <Clock className="h-5 w-5 lg:h-6 lg:w-6 mb-1 lg:mb-2" />
              <span className="text-xs lg:text-sm">Timetable</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-auto py-3 lg:py-4">
              <FileText className="h-5 w-5 lg:h-6 lg:w-6 mb-1 lg:mb-2" />
              <span className="text-xs lg:text-sm">Documents</span>
            </Button>
            <Button variant="outline" className="flex flex-col h-auto py-3 lg:py-4">
              <Share2 className="h-5 w-5 lg:h-6 lg:w-6 mb-1 lg:mb-2" />
              <span className="text-xs lg:text-sm">Social Media</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

