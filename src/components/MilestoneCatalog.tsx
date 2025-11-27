import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Milestone {
  id: string
  title: string
  date: string
  type: 'romantic' | 'growth' | 'family'
  importance: number
  status: 'planned' | 'in-progress' | 'achieved'
}

const MilestoneCatalog: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'romantic' | 'growth' | 'family'>('all')
  const [sortBy, setSortBy] = useState<'date' | 'importance'>('date')

  // 模拟里程碑数据
  const milestones: Milestone[] = [
    { id: '1', title: '筹备婚礼', date: '2024-12-31', type: 'family', importance: 5, status: 'in-progress' },
    { id: '2', title: '购置爱巢', date: '2025-06-30', type: 'family', importance: 4, status: 'planned' },
    { id: '3', title: '下一次共同旅行', date: '2024-08-15', type: 'romantic', importance: 3, status: 'planned' },
    { id: '4', title: '第一次约会', date: '2023-05-20', type: 'romantic', importance: 5, status: 'achieved' },
    { id: '5', title: '第一次旅行', date: '2023-08-15', type: 'romantic', importance: 4, status: 'achieved' },
    { id: '6', title: '求婚成功', date: '2024-02-14', type: 'romantic', importance: 5, status: 'achieved' },
    { id: '7', title: '共同学习一门新技能', date: '2024-10-01', type: 'growth', importance: 3, status: 'planned' },
    { id: '8', title: '养一只宠物', date: '2025-03-01', type: 'family', importance: 3, status: 'planned' },
  ]

  // 筛选和排序里程碑
  const filteredMilestones = milestones
    .filter(milestone => filter === 'all' || milestone.type === filter)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else {
        return b.importance - a.importance
      }
    })

  return (
    <div className="milestone-catalog-container">
      <div className="catalog-header">
        <h1>爱情里程碑目录</h1>
        <p>我们的爱情时间线，记录每一个重要时刻</p>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <label>按类型筛选：</label>
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              全部
            </button>
            <button 
              className={filter === 'romantic' ? 'active' : ''}
              onClick={() => setFilter('romantic')}
            >
              浪漫时刻
            </button>
            <button 
              className={filter === 'growth' ? 'active' : ''}
              onClick={() => setFilter('growth')}
            >
              共同成长
            </button>
            <button 
              className={filter === 'family' ? 'active' : ''}
              onClick={() => setFilter('family')}
            >
              家庭事务
            </button>
          </div>
        </div>

        <div className="filter-group">
          <label>排序方式：</label>
          <div className="filter-buttons">
            <button 
              className={sortBy === 'date' ? 'active' : ''}
              onClick={() => setSortBy('date')}
            >
              按时间顺序
            </button>
            <button 
              className={sortBy === 'importance' ? 'active' : ''}
              onClick={() => setSortBy('importance')}
            >
              按重要程度
            </button>
          </div>
        </div>
      </div>

      <div className="timeline">
        {filteredMilestones.map((milestone) => (
          <Link to={`/milestones/${milestone.id}`} key={milestone.id} className="timeline-item">
            <div className="timeline-dot" data-status={milestone.status}></div>
            <div className="timeline-content">
              <div className="milestone-header">
                <h3>{milestone.title}</h3>
                <span className={`status-badge ${milestone.status}`}>
                  {milestone.status === 'planned' ? '规划中' : 
                   milestone.status === 'in-progress' ? '进行中' : '已达成'}
                </span>
              </div>
              <div className="milestone-meta">
                <span className="date">{milestone.date}</span>
                <span className="type">
                  {milestone.type === 'romantic' ? '浪漫时刻' : 
                   milestone.type === 'growth' ? '共同成长' : '家庭事务'}
                </span>
                <span className="importance">
                  重要性：{'★'.repeat(milestone.importance)}{'☆'.repeat(5 - milestone.importance)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MilestoneCatalog