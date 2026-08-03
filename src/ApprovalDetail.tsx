import type { ReactNode } from 'react'
import type { ApprovalItem } from './types'
import { FlowTimeline } from './FlowTimeline'
import { mockStepsFor } from './mock'
import './flow.css'

export interface ApprovalDetailProps {
  item: ApprovalItem
  formSlot?: ReactNode
}

export function ApprovalDetail({ item, formSlot }: ApprovalDetailProps) {
  const steps = mockStepsFor(item.id)

  return (
    <div className="oa-flow-detail">
      <header className="oa-flow-detail__header">
        <h2>{item.title}</h2>
        <p>
          {item.applicant} · {item.department} · 提交于 {item.submittedAt}
        </p>
      </header>
      <div className="oa-flow-detail__grid">
        <section className="oa-flow-detail__form">{formSlot}</section>
        <aside>
          <h3>审批进度</h3>
          <FlowTimeline steps={steps} />
        </aside>
      </div>
    </div>
  )
}
