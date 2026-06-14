import { CheckCheck } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/button'
import { NotificationsTable } from '@/features/notifications/NotificationsTable'

const UNREAD_COUNT: number = 3

export default function Notifications() {
  return (
    <PageContainer
      title="Notifications"
      description={`${UNREAD_COUNT} unread notification${UNREAD_COUNT !== 1 ? 's' : ''}`}
      actions={
        <Button variant="outline" size="sm" className="gap-1.5">
          <CheckCheck className="h-4 w-4" />
          Mark all read
        </Button>
      }
    >
      <NotificationsTable />
    </PageContainer>
  )
}
