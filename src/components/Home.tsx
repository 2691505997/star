import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* 顶部英雄区 */}
      <section className="hero-section">
        <div className="hero-background">
          {/* 动态记忆星河背景 */}
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-starry-sky-above-the-mountains-4572-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-content">
          <h1>我们的爱情宇宙</h1>
          <p>我们的未来，共同的轨迹</p>
          <Link to="/login" className="cta-button">进入平台</Link>
        </div>
      </section>

      {/* 计划宣言 */}
      <section className="declaration-section">
        <h2>《"永芬星轨"共同宣言》</h2>
        <p>我们携手共进，点亮共同的未来...</p>
        <button className="read-more-button">阅读全文</button>
      </section>

      {/* 本期重点目标 */}
      <section className="featured-goals-section">
        <h2>本期重点目标</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <h3>筹备婚礼</h3>
            <div className="goal-meta">
              <span className="importance">重要性：★★★★★</span>
              <span className="deadline">预计完成：2024-12-31</span>
            </div>
            <p>共同投入：时间、精力、情感</p>
            <Link to="/milestones/1" className="view-details-link">查看详情</Link>
          </div>
          <div className="goal-card">
            <h3>购置爱巢</h3>
            <div className="goal-meta">
              <span className="importance">重要性：★★★★☆</span>
              <span className="deadline">预计完成：2025-06-30</span>
            </div>
            <p>共同投入：财务、时间、决策</p>
            <Link to="/milestones/2" className="view-details-link">查看详情</Link>
          </div>
          <div className="goal-card">
            <h3>下一次共同旅行</h3>
            <div className="goal-meta">
              <span className="importance">重要性：★★★☆☆</span>
              <span className="deadline">预计完成：2024-08-15</span>
            </div>
            <p>共同投入：时间、财务、规划</p>
            <Link to="/milestones/3" className="view-details-link">查看详情</Link>
          </div>
        </div>
      </section>

      {/* 已达成里程碑 */}
      <section className="achieved-milestones-section">
        <h2>已达成里程碑</h2>
        <div className="milestones-scroll">
          <div className="milestone-item">
            <div className="milestone-date">2023-05-20</div>
            <div className="milestone-content">
              <h3>第一次约会</h3>
              <p>我们的故事从这里开始...</p>
            </div>
          </div>
          <div className="milestone-item">
            <div className="milestone-date">2023-08-15</div>
            <div className="milestone-content">
              <h3>第一次旅行</h3>
              <p>共同探索世界的美好...</p>
            </div>
          </div>
          <div className="milestone-item">
            <div className="milestone-date">2024-02-14</div>
            <div className="milestone-content">
              <h3>求婚成功</h3>
              <p>我们决定携手一生...</p>
            </div>
          </div>
        </div>
      </section>

      {/* 爱情动态 */}
      <section className="love-updates-section">
        <h2>爱情动态</h2>
        <div className="update-card">
          <div className="update-header">
            <span className="update-date">2024-05-20</span>
            <h3>两周年纪念</h3>
          </div>
          <div className="update-content">
            <p>今天是我们相识两周年的日子，感谢一路有你相伴...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home