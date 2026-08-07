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
  /** 点击行查看详情的回调。传入后整行可点击（用于抽屉查看），不传则保留跳转详情页的链接行为 */
  onSelect?: (item: ApprovalItem) => void
}

export function ApprovalList({ items, basePath = '/approval', onSelect }: ApprovalListProps) {
  const clickable = Boolean(onSelect)
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
            <tr
              key={item.id}
              className={clickable ? 'oa-flow-table__row--clickable' : undefined}
              onClick={clickable ? () => onSelect?.(item) : undefined}
            >
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
                {clickable ? (
                  <span className="oa-flow-link">查看</span>
                ) : (
                  <Link to={`${basePath}/${item.id}`} className="oa-flow-link">
                    查看
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
