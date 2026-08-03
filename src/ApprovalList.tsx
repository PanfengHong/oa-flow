import { Link } from 'react-router-dom'
import type { ApprovalItem, FlowStatus } from './types'
import './flow.css'

const statusLabel: Record<FlowStatus, string> = {
  pending: '待审批',
  approved: '已通过',
  rejected: '已驳回',
  draft: '草稿',
}

export interface ApprovalListProps {
  items: ApprovalItem[]
  basePath?: string
}

export function ApprovalList({ items, basePath = '/approval' }: ApprovalListProps) {
  return (
    <div className="oa-flow-panel">
      <div className="oa-flow-panel__head">
        <h2>审批中心</h2>
        <span>流程引擎 · oa-flow</span>
      </div>
      <table className="oa-flow-table">
        <thead>
          <tr>
            <th>标题</th>
            <th>申请人</th>
            <th>部门</th>
            <th>状态</th>
            <th>提交时间</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.applicant}</td>
              <td>{item.department}</td>
              <td>
                <span className={`oa-flow-badge oa-flow-badge--${item.status}`}>
                  {statusLabel[item.status]}
                </span>
              </td>
              <td>{item.submittedAt}</td>
              <td>
                <Link to={`${basePath}/${item.id}`} className="oa-flow-link">
                  查看
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
