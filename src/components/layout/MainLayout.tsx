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
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setSidebarOpen(false) // Close sidebar on mobile when tab changes
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        <header className="h-16 border-b border-border flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h2 className="text-lg lg:text-xl font-semibold truncate">
              {navigation.find((n) => n.id === activeTab)?.label || 'Dashboard'}
            </h2>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <span className="text-xs lg:text-sm text-muted-foreground hidden sm:inline">Role:</span>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value as 'Admin' | 'Leader' | 'Member')}
              className="w-24 lg:w-32 text-sm"
            >
              <option value="Admin">Admin</option>
              <option value="Leader">Leader</option>
              <option value="Member">Member</option>
            </Select>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

