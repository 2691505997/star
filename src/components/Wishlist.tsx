import React, { useState } from 'react'

interface WishItem {
  id: string
  title: string
  description: string
  status: 'pending' | 'in-progress' | 'completed'
  createdAt: string
  completedAt?: string
}

const Wishlist: React.FC = () => {
  const [wishItems, setWishItems] = useState<WishItem[]>([
    { id: '1', title: '学习一门新技能', description: '一起学习摄影，记录我们的美好时光', status: 'pending', createdAt: '2024-05-01' },
    { id: '2', title: '养一只宠物', description: '养一只可爱的小猫，给我们的生活增添乐趣', status: 'in-progress', createdAt: '2024-06-15' },
    { id: '3', title: '一起看极光', description: '去北欧看极光，实现我们的浪漫梦想', status: 'pending', createdAt: '2024-07-01' },
    { id: '4', title: '学习烹饪', description: '一起学习烹饪，每天为对方做美味的饭菜', status: 'completed', createdAt: '2024-04-01', completedAt: '2024-06-30' },
  ])

  const [newWish, setNewWish] = useState({ title: '', description: '' })

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault()
    if (newWish.title.trim()) {
      const newItem: WishItem = {
        id: Date.now().toString(),
        title: newWish.title,
        description: newWish.description,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0]
      }
      setWishItems([...wishItems, newItem])
      setNewWish({ title: '', description: '' })
    }
  }

  const handleStatusChange = (id: string, newStatus: WishItem['status']) => {
    setWishItems(wishItems.map(item => 
      item.id === id ? {
        ...item,
        status: newStatus,
        completedAt: newStatus === 'completed' ? new Date().toISOString().split('T')[0] : undefined
      } : item
    ))
  }

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1>我们的共同心愿单</h1>
        <p>记录我们想要一起完成的美好愿望</p>
      </div>

      {/* 添加新心愿 */}
      <div className="add-wish-section">
        <h2>添加新心愿</h2>
        <form onSubmit={handleAddWish} className="add-wish-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="wish-title">心愿名称</label>
              <input
                type="text"
                id="wish-title"
                value={newWish.title}
                onChange={(e) => setNewWish({ ...newWish, title: e.target.value })}
                placeholder="请输入心愿名称"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="wish-description">心愿描述</label>
              <textarea
                id="wish-description"
                value={newWish.description}
                onChange={(e) => setNewWish({ ...newWish, description: e.target.value })}
                placeholder="请输入心愿描述"
                rows={3}
              />
            </div>
          </div>
          <button type="submit" className="add-wish-button">添加心愿</button>
        </form>
      </div>

      {/* 心愿列表 */}
      <div className="wish-items-section">
        <div className="wish-filters">
          <h2>心愿列表</h2>
        </div>

        <div className="wish-items-grid">
          {wishItems.map((item) => (
            <div key={item.id} className={`wish-item-card ${item.status}`}>
              <div className="wish-item-header">
                <h3>{item.title}</h3>
                <span className={`status-badge ${item.status}`}>
                  {item.status === 'pending' ? '待实现' : 
                   item.status === 'in-progress' ? '进行中' : '已完成'}
                </span>
              </div>
              <p className="wish-description">{item.description}</p>
              <div className="wish-meta">
                <span className="created-at">创建于：{item.createdAt}</span>
                {item.completedAt && <span className="completed-at">完成于：{item.completedAt}</span>}
              </div>
              <div className="wish-actions">
                <select 
                  value={item.status}
                  onChange={(e) => handleStatusChange(item.id, e.target.value as WishItem['status'])}
                  className="status-select"
                >
                  <option value="pending">待实现</option>
                  <option value="in-progress">进行中</option>
                  <option value="completed">已完成</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist