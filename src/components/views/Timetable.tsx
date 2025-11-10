import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Edit } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { TimetableEntry } from '../../types'

const timetableEntries: TimetableEntry[] = [
  { id: '1', time: '09:00', activity: 'Setup & Sound Check', responsible: 'Media Team' },
  { id: '2', time: '09:30', activity: 'Worship Team Rehearsal', responsible: 'Worship Leader' },
  { id: '3', time: '10:00', activity: 'Service Begins - Welcome', responsible: 'Host' },
  { id: '4', time: '10:05', activity: 'Opening Worship', responsible: 'Worship Team' },
  { id: '5', time: '10:20', activity: 'Announcements', responsible: 'Pastor' },
  { id: '6', time: '10:25', activity: 'Message', responsible: 'Pastor' },
  { id: '7', time: '11:15', activity: 'Closing Worship', responsible: 'Worship Team' },
  { id: '8', time: '11:25', activity: 'Benediction', responsible: 'Pastor' },
  { id: '9', time: '11:30', activity: 'Fellowship & Refreshments', responsible: 'Hospitality Team' },
]

export function Timetable() {
  const { isMember } = useAuth()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Service Timetable</h2>
          <p className="text-muted-foreground">Hour-by-hour schedule for Sunday service</p>
        </div>
        {!isMember && (
          <Button>
            <Edit className="h-4 w-4 mr-2" />
            Edit Timetable
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sunday Service Schedule</CardTitle>
          <CardDescription>Detailed timeline of activities and responsibilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Time</th>
                  <th className="text-left py-3 px-4 font-medium">Activity</th>
                  <th className="text-left py-3 px-4 font-medium">Responsible</th>
                </tr>
              </thead>
              <tbody>
                {timetableEntries.map((entry) => (
                  <tr key={entry.id} className="border-b hover:bg-accent/50">
                    <td className="py-3 px-4 font-mono text-sm">{entry.time}</td>
                    <td className="py-3 px-4">{entry.activity}</td>
                    <td className="py-3 px-4 text-muted-foreground">{entry.responsible}</td>
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

