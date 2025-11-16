import { LayoutDashboard, Calendar, Clock, FileText, Users, Share2, Bell, Settings } from 'lucide-react'
import { cn } from '../../lib/utils'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'roster', label: 'Roster & Calendar', icon: Calendar },
  { id: 'timetable', label: 'Timetable', icon: Clock },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'teams', label: 'Teams & Roles', icon: Users },
  { id: 'social', label: 'Social Media', icon: Share2 },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col shadow-lg lg:shadow-none">
      <div className="p-4 lg:p-6 border-b border-border">
        <h1 className="text-xl lg:text-2xl font-bold">Church Hub</h1>
        <p className="text-xs lg:text-sm text-muted-foreground">Team Management</p>
      </div>
      <nav className="flex-1 p-3 lg:p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'w-full flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

