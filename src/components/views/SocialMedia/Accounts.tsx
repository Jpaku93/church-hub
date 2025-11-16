import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import { Link2, Instagram, Facebook, Youtube } from 'lucide-react'
import { useAuth } from '../../../contexts/AuthContext'
import { SocialMediaAccount } from '../../../types'

const accounts: SocialMediaAccount[] = [
  { id: '1', platform: 'instagram', name: '@churchhub', linked: true },
  { id: '2', platform: 'facebook', name: 'Church Hub', linked: false },
  { id: '3', platform: 'youtube', name: 'Church Hub Channel', linked: true },
]

const platformIcons = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
}

const platformColors = {
  instagram: 'bg-gradient-to-r from-purple-500 to-pink-500',
  facebook: 'bg-blue-600',
  youtube: 'bg-red-600',
}

export function SocialMediaAccounts() {
  const { isMember } = useAuth()

  return (
    <div className="space-y-4 lg:space-y-6">
      <div>
        <h3 className="text-xl lg:text-2xl font-semibold">Connected Accounts</h3>
        <p className="text-sm lg:text-base text-muted-foreground">Manage your social media account connections</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => {
          const Icon = platformIcons[account.platform]
          return (
            <Card key={account.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${platformColors[account.platform]} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  {account.linked ? (
                    <Badge variant="default">Linked</Badge>
                  ) : (
                    <Badge variant="secondary">Not Linked</Badge>
                  )}
                </div>
                <CardTitle className="mt-4">
                  {account.platform.charAt(0).toUpperCase() + account.platform.slice(1)}
                </CardTitle>
                <CardDescription>{account.name}</CardDescription>
              </CardHeader>
              <CardContent>
                {!isMember && (
                  <Button
                    variant={account.linked ? 'outline' : 'default'}
                    className="w-full"
                  >
                    <Link2 className="h-4 w-4 mr-2" />
                    {account.linked ? 'Reconnect' : 'Link Account'}
                  </Button>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

