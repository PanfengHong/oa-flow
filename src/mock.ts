import type { ApprovalItem, FlowStatus } from './types'

export const mockApprovals: ApprovalItem[] = [
  {
    id: 'ap-001',
    title: '张三 · 年假 3 天',
    applicant: '张三',
    department: '研发中心',
    status: 'pending',
    submittedAt: '2026-08-01 09:30',
    formSchemaId: 'leave-request',
  },
  {
    id: 'ap-002',
    title: '李四 · 出差申请',
    applicant: '李四',
    department: '市场部',
    status: 'approved',
    submittedAt: '2026-07-28 14:10',
    formSchemaId: 'travel-request',
  },
  {
    id: 'ap-003',
    title: '王五 · 采购审批',
    applicant: '王五',
    department: '运营部',
    status: 'rejected',
    submittedAt: '2026-07-25 11:00',
    formSchemaId: 'purchase-request',
  },
]

export function mockStepsFor(id: string) {
  const base = [
    { id: 's1', title: '提交申请', assignee: '申请人', status: 'approved' as FlowStatus },
    { id: 's2', title: '直属主管', assignee: '赵主管', status: 'approved' as FlowStatus },
    { id: 's3', title: 'HR 备案', assignee: 'HR', status: 'pending' as FlowStatus },
  ]
  if (id === 'ap-003') {
    return [
      { ...base[0], status: 'approved' as FlowStatus },
      { ...base[1], status: 'rejected' as FlowStatus, comment: '预算超限' },
    ]
  }
  return base
}
