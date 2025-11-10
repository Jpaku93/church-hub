import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Dashboard } from '../views/Dashboard'
import { RosterCalendar } from '../views/RosterCalendar'
import { Timetable } from '../views/Timetable'
import { Documents } from '../views/Documents'
import { TeamsRoles } from '../views/TeamsRoles'
import { SocialMedia } from '../views/SocialMedia'
import { Notifications } from '../views/Notifications'
import { Settings } from '../views/Settings'
import { useAuth } from '../../contexts/AuthContext'
import { Select } from '../ui/select'

const navigation = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'roster', label: 'Roster & Calendar' },
  { id: 'timetable', label: 'Timetable' },
  { id: 'documents', label: 'Documents' },
  { id: 'teams', label: 'Teams & Roles' },
  { id: 'social', label: 'Social Media' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'settings', label: 'Settings' },
]

export function MainLayout() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const { role, setRole } = useAuth()

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'roster':
        return <RosterCalendar />
      case 'timetable':
        return <Timetable />
      case 'documents':
        return <Documents />
      case 'teams':
        return <TeamsRoles />
      case 'social':
        return <SocialMedia />
      case 'notifications':
        return <Notifications />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-border flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold">
            {navigation.find((n) => n.id === activeTab)?.label || 'Dashboard'}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Role:</span>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value as 'Admin' | 'Leader' | 'Member')}
              className="w-32"
            >
              <option value="Admin">Admin</option>
              <option value="Leader">Leader</option>
              <option value="Member">Member</option>
            </Select>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

