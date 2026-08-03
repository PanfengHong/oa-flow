import type { FlowStep } from './types'
import './flow.css'

const statusLabel = {
  pending: '进行中',
  approved: '已通过',
  rejected: '已驳回',
  draft: '草稿',
} as const

export function FlowTimeline({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="oa-flow-timeline">
      {steps.map((step, index) => (
        <li key={step.id} className={`oa-flow-timeline__item oa-flow-timeline__item--${step.status}`}>
          <div className="oa-flow-timeline__dot">{index + 1}</div>
          <div className="oa-flow-timeline__content">
            <strong>{step.title}</strong>
            <span>{step.assignee}</span>
            <em>{statusLabel[step.status]}</em>
            {step.comment ? <p>{step.comment}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  )
}
