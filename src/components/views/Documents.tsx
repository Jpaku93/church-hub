import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { CheckCircle2, XCircle, FileText } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { Document } from '../../types'

const documents: Document[] = [
  {
    id: '1',
    folder: 'Easter Service',
    title: 'Easter Service Poster',
    tags: ['poster', 'graphic'],
    status: 'pending',
    submittedBy: 'Sarah Johnson',
  },
  {
    id: '2',
    folder: 'Easter Service',
    title: 'Easter Reel',
    tags: ['reel', 'video'],
    status: 'approved',
    submittedBy: 'Mike Brown',
  },
  {
    id: '3',
    folder: 'Sunday Service',
    title: 'Worship Song List',
    tags: ['worship', 'music'],
    status: 'pending',
    submittedBy: 'Jane Smith',
  },
  {
    id: '4',
    folder: 'Sunday Service',
    title: 'Sermon Notes',
    tags: ['document'],
    status: 'changes_requested',
    submittedBy: 'John Doe',
  },
]

const folders = Array.from(new Set(documents.map((d) => d.folder)))

export function Documents() {
  const { isMember } = useAuth()

  const getDocumentsByFolder = (folder: string) => {
    return documents.filter((d) => d.folder === folder)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case 'changes_requested':
        return <XCircle className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold">Documents</h2>
        <p className="text-sm lg:text-base text-muted-foreground">Manage and review church documents</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {folders.map((folder) => {
          const folderDocs = getDocumentsByFolder(folder)
          return (
            <Card key={folder}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <CardTitle>{folder}</CardTitle>
                </div>
                <CardDescription>{folderDocs.length} documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {folderDocs.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-3 space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{doc.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {doc.submittedBy}
                          </p>
                        </div>
                        {getStatusIcon(doc.status)}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {doc.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {!isMember && doc.status === 'pending' && (
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="default" className="flex-1">
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            Request Changes
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

