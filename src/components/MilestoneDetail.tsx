import React from 'react'
import { useParams } from 'react-router-dom'

interface MilestoneDetailData {
  id: string
  title: string
  date: string
  location: string
  participants: string[]
  backgroundStory: string
  liyongqiThoughts: string
  liushufenThoughts: string
  status: 'planned' | 'in-progress' | 'achieved'
  significance: string
  imageUrl?: string
}

const MilestoneDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // 模拟里程碑详情数据
  const milestoneData: MilestoneDetailData = {
    id: id || '1',
    title: '筹备婚礼',
    date: '2024-12-31',
    location: '北京',
    participants: ['李永奇', '刘书芬'],
    backgroundStory: '我们决定在相识两周年之际举行婚礼，这是我们爱情旅程中的重要里程碑。婚礼筹备工作从2024年5月开始，包括场地选择、婚纱摄影、宾客邀请等多个环节。',
    liyongqiThoughts: '能和书芬步入婚姻殿堂是我人生中最幸福的事情，每一次筹备工作都让我更加期待我们的未来。',
    liushufenThoughts: '永奇的细心和体贴让我非常感动，我相信我们的婚礼一定会是一场完美的盛宴，开启我们幸福的婚姻生活。',
    status: 'in-progress',
    significance: '婚礼是我们爱情的见证，也是我们组建家庭的开始。这一里程碑标志着我们从恋人关系升级为夫妻关系，将共同承担更多的责任和义务，携手面对未来的一切挑战。',
    imageUrl: 'https://via.placeholder.com/800x400?text=Wedding+Preparation'
  }

  return (
    <div className="milestone-detail-container">
      <div className="detail-header">
        <h1>{milestoneData.title}</h1>
        <span className={`status-badge ${milestoneData.status}`}>
          {milestoneData.status === 'planned' ? '规划中' : 
           milestoneData.status === 'in-progress' ? '进行中' : '已达成'}
        </span>
      </div>

      {/* 主视觉区域 */}
      <div className="main-visual">
        <img 
          src={milestoneData.imageUrl} 
          alt={milestoneData.title} 
          className="milestone-image"
        />
      </div>

      {/* 详细信息 */}
      <div className="detail-content">
        <div className="detail-section">
          <h2>详细记录</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>日期：</label>
              <span>{milestoneData.date}</span>
            </div>
            <div className="info-item">
              <label>地点：</label>
              <span>{milestoneData.location}</span>
            </div>
            <div className="info-item">
              <label>参与人：</label>
              <span>{milestoneData.participants.join('、')}</span>
            </div>
          </div>
          
          <div className="background-story">
            <h3>背景故事</h3>
            <p>{milestoneData.backgroundStory}</p>
          </div>
        </div>

        <div className="detail-section">
          <h2>双方感想</h2>
          <div className="thoughts-container">
            <div className="thought-card">
              <h3>李永奇的感想</h3>
              <p>{milestoneData.liyongqiThoughts}</p>
            </div>
            <div className="thought-card">
              <h3>刘书芬的感想</h3>
              <p>{milestoneData.liushufenThoughts}</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>意义阐述</h2>
          <div className="significance-content">
            <p>{milestoneData.significance}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MilestoneDetail