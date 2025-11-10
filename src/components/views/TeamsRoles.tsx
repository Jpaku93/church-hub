import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Users, UserPlus } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { Ministry } from '../../types'

const ministries: Ministry[] = [
  { id: '1', name: 'Worship', leader: 'Sarah Johnson', memberCount: 12, color: '#3b82f6' },
  { id: '2', name: 'Youth', leader: 'Mike Brown', memberCount: 8, color: '#10b981' },
  { id: '3', name: 'Prayer', leader: 'Jane Smith', memberCount: 15, color: '#f59e0b' },
  { id: '4', name: 'Children', leader: 'John Doe', memberCount: 10, color: '#ef4444' },
  { id: '5', name: 'Media', leader: 'David Wilson', memberCount: 6, color: '#8b5cf6' },
  { id: '6', name: 'Hospitality', leader: 'Emily Davis', memberCount: 9, color: '#ec4899' },
]

export function TeamsRoles() {
  const { isMember } = useAuth()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Teams & Roles</h2>
        <p className="text-muted-foreground">Manage ministries and team members</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ministries.map((ministry) => (
          <Card key={ministry.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: ministry.color }}
                  />
                  <CardTitle>{ministry.name}</CardTitle>
                </div>
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>Led by {ministry.leader}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Members</span>
                  <Badge variant="secondary">{ministry.memberCount}</Badge>
                </div>
                {!isMember && (
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="default" className="flex-1">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Assign Duty
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Confirm Availability
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

