import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Bell, Clock, FileText, Users, CheckCircle2 } from 'lucide-react'
import { Notification } from '../../types'
import { format } from 'date-fns'

const notifications: Notification[] = [
  {
    id: '1',
    type: 'duty',
    title: 'Duty Reminder',
    message: 'You have a sound system setup duty on Sunday, Jan 14',
    date: new Date(2024, 0, 12),
    read: false,
  },
  {
    id: '2',
    type: 'deadline',
    title: 'Upload Deadline',
    message: 'Easter Service poster upload deadline is approaching (Jan 20)',
    date: new Date(2024, 0, 11),
    read: false,
  },
  {
    id: '3',
    type: 'roster',
    title: 'Roster Update',
    message: 'Your assignment for Youth Group on Jan 16 has been confirmed',
    date: new Date(2024, 0, 10),
    read: true,
  },
  {
    id: '4',
    type: 'approval',
    title: 'Approval Required',
    message: 'New document "Weekly Announcement" requires your approval',
    date: new Date(2024, 0, 9),
    read: false,
  },
]

const notificationIcons = {
  duty: Clock,
  deadline: FileText,
  roster: Users,
  approval: CheckCircle2,
}

const notificationColors = {
  duty: 'bg-blue-500',
  deadline: 'bg-yellow-500',
  roster: 'bg-green-500',
  approval: 'bg-purple-500',
}

export function Notifications() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">Notifications</h2>
          <p className="text-sm lg:text-base text-muted-foreground">Stay updated with reminders and updates</p>
        </div>
        {unreadCount > 0 && (
          <Badge variant="default" className="text-xs lg:text-sm">
            <Bell className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
            {unreadCount} unread
          </Badge>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Notifications</CardTitle>
          <CardDescription>Your recent reminders and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notificationIcons[notification.type]
              return (
                <div
                  key={notification.id}
                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                    !notification.read ? 'bg-accent/50' : ''
                  }`}
                >
                  <div className={`p-2 rounded-lg ${notificationColors[notification.type]} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{notification.title}</h4>
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {format(notification.date, 'MMM d, yyyy')}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

