export type FlowStatus = 'pending' | 'approved' | 'rejected' | 'draft'

export interface FlowStep {
  id: string
  title: string
  assignee: string
  status: FlowStatus
  finishedAt?: string
  comment?: string
}

export interface ApprovalItem {
  id: string
  title: string
  applicant: string
  department: string
  status: FlowStatus
  submittedAt: string
  formSchemaId: string
}
