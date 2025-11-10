import { useState } from 'react'
import { Calendar, BarChart3, Link2 } from 'lucide-react'
import { SocialMediaPlanner } from './SocialMedia/Planner'
import { SocialMediaAccounts } from './SocialMedia/Accounts'
import { SocialMediaAnalytics } from './SocialMedia/Analytics'

export function SocialMedia() {
  const [activeTab, setActiveTab] = useState<'planner' | 'accounts' | 'analytics'>('planner')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Social Media</h2>
        <p className="text-muted-foreground">Manage social media content and analytics</p>
      </div>

      <div className="border-b">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('planner')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'planner'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
            }`}
          >
            <Calendar className="h-4 w-4 inline mr-2" />
            Planner
          </button>
          <button
            onClick={() => setActiveTab('accounts')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'accounts'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
            }`}
          >
            <Link2 className="h-4 w-4 inline mr-2" />
            Accounts
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'analytics'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
            }`}
          >
            <BarChart3 className="h-4 w-4 inline mr-2" />
            Analytics
          </button>
        </nav>
      </div>

      {activeTab === 'planner' && <SocialMediaPlanner />}
      {activeTab === 'accounts' && <SocialMediaAccounts />}
      {activeTab === 'analytics' && <SocialMediaAnalytics />}
    </div>
  )
}

