import { Download } from 'lucide-react'
import { PageContainer } from '@/components/layout/PageContainer'
import { Button } from '@/components/ui/button'
import { LogsTable } from '@/features/logs/LogsTable'

export default function Logs() {
  return (
    <PageContainer
      title="System Logs"
      description="Audit trail and system activity records."
      actions={
        <Button variant="outline" size="sm" className="gap-1.5">
          <Download className="h-4 w-4" />
          Export
        </Button>
      }
    >
      <LogsTable />
    </PageContainer>
  )
}
