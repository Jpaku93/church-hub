import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Settings as SettingsIcon } from 'lucide-react'

export function Settings() {
  return (
    <div className="space-y-4 lg:space-y-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold">Settings</h2>
        <p className="text-sm lg:text-base text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <SettingsIcon className="h-6 w-6" />
            <CardTitle>Settings</CardTitle>
          </div>
          <CardDescription>Settings panel coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Settings functionality will be available in a future update.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

