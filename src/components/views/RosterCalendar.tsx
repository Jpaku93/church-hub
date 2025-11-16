import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Plus, X } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { Badge } from '../ui/badge'
import { TimetableEntry } from '../../types'

const ministries = [
  { name: 'Worship', color: '#3b82f6' },
  { name: 'Youth', color: '#10b981' },
  { name: 'Prayer', color: '#f59e0b' },
  { name: 'Children', color: '#ef4444' },
  { name: 'Media', color: '#8b5cf6' },
]

// Sample calendar data - simplified month view
const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1)
const events = [
  { day: 5, title: 'Sunday Service', ministry: 'Worship' },
  { day: 7, title: 'Youth Group', ministry: 'Youth' },
  { day: 12, title: 'Prayer Meeting', ministry: 'Prayer' },
  { day: 14, title: 'Sunday Service', ministry: 'Worship' },
  { day: 19, title: 'Children\'s Program', ministry: 'Children' },
  { day: 21, title: 'Sunday Service', ministry: 'Worship' },
  { day: 28, title: 'Sunday Service', ministry: 'Worship' },
]

const assignments = [
  { date: 'Jan 14', event: 'Sunday Service', role: 'Sound Engineer', person: 'John Doe' },
  { date: 'Jan 16', event: 'Youth Group', role: 'Leader', person: 'Jane Smith' },
  { date: 'Jan 18', event: 'Prayer Meeting', role: 'Facilitator', person: 'Mike Brown' },
]

// Timetable entries - can vary by day/event type
const getTimetableForDay = (day: number): TimetableEntry[] => {
  const event = events.find((e) => e.day === day)
  if (event?.title === 'Sunday Service') {
    return [
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
  } else if (event?.title === 'Youth Group') {
    return [
      { id: '1', time: '18:30', activity: 'Setup & Welcome', responsible: 'Youth Leaders' },
      { id: '2', time: '19:00', activity: 'Icebreaker Activity', responsible: 'Youth Leaders' },
      { id: '3', time: '19:15', activity: 'Worship', responsible: 'Youth Band' },
      { id: '4', time: '19:30', activity: 'Teaching Session', responsible: 'Youth Pastor' },
      { id: '5', time: '20:00', activity: 'Small Groups', responsible: 'Group Leaders' },
      { id: '6', time: '20:30', activity: 'Snacks & Fellowship', responsible: 'Hospitality' },
    ]
  } else if (event?.title === 'Prayer Meeting') {
    return [
      { id: '1', time: '18:00', activity: 'Setup & Welcome', responsible: 'Prayer Team' },
      { id: '2', time: '18:15', activity: 'Opening Prayer', responsible: 'Prayer Leader' },
      { id: '3', time: '18:30', activity: 'Worship', responsible: 'Worship Team' },
      { id: '4', time: '18:45', activity: 'Prayer Time', responsible: 'All' },
      { id: '5', time: '19:15', activity: 'Closing & Fellowship', responsible: 'Prayer Leader' },
    ]
  }
  return []
}

export function RosterCalendar() {
  const { isMember } = useAuth()
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const getEventForDay = (day: number) => {
    return events.find((e) => e.day === day)
  }

  const getMinistryColor = (ministryName: string) => {
    return ministries.find((m) => m.name === ministryName)?.color || '#gray'
  }

  const handleDayClick = (day: number) => {
    const event = getEventForDay(day)
    if (event) {
      setSelectedDay(selectedDay === day ? null : day)
    }
  }

  const selectedTimetable = selectedDay ? getTimetableForDay(selectedDay) : []
  const selectedEvent = selectedDay ? getEventForDay(selectedDay) : null

  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">January 2024</h2>
          <p className="text-sm lg:text-base text-muted-foreground">Roster & Calendar</p>
        </div>
        {!isMember && (
          <Button size="sm" className="w-full sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        )}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Monthly view of events and duties</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1 lg:gap-2 mb-2 lg:mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-xs lg:text-sm font-medium text-muted-foreground py-1 lg:py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 lg:gap-2">
              {calendarDays.map((day) => {
                const event = getEventForDay(day)
                const isSelected = selectedDay === day
                return (
                  <div
                    key={day}
                    onClick={() => handleDayClick(day)}
                    className={`aspect-square border rounded-md p-1 lg:p-2 text-xs lg:text-sm hover:bg-accent cursor-pointer transition-colors ${
                      isSelected ? 'ring-2 ring-primary bg-primary/10' : ''
                    } ${event ? '' : 'opacity-50'}`}
                  >
                    <div className="font-medium mb-0.5 lg:mb-1">{day}</div>
                    {event && (
                      <div
                        className="text-[10px] lg:text-xs p-0.5 lg:p-1 rounded truncate"
                        style={{
                          backgroundColor: getMinistryColor(event.ministry) + '20',
                          color: getMinistryColor(event.ministry),
                        }}
                      >
                        {event.title}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ministry Legend</CardTitle>
            <CardDescription>Color coding for ministries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {ministries.map((ministry) => (
                <div key={ministry.name} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: ministry.color }}
                  />
                  <span className="text-sm">{ministry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {selectedDay && selectedTimetable.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>
                  Timetable - {selectedEvent?.title} (Jan {selectedDay})
                </CardTitle>
                <CardDescription>Schedule for selected event</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedDay(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium">Time</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium">Activity</th>
                    <th className="text-left py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-medium">Responsible</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedTimetable.map((entry) => (
                    <tr key={entry.id} className="border-b hover:bg-accent/50">
                      <td className="py-2 lg:py-3 px-2 lg:px-4 font-mono text-xs lg:text-sm">{entry.time}</td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm">{entry.activity}</td>
                      <td className="py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm text-muted-foreground">{entry.responsible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Assignments</CardTitle>
          <CardDescription>At-a-glance duty allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assignments.map((assignment, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{assignment.event}</p>
                  <p className="text-sm text-muted-foreground">
                    {assignment.date} • {assignment.role}
                  </p>
                </div>
                <Badge variant="outline">{assignment.person}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

