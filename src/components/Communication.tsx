import React, { useState, useEffect } from 'react'

interface Message {
  id: string
  sender: 'liyongqi' | 'liushufen'
  content: string
  timestamp: string
}

const Communication: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'liyongqi', content: '亲爱的，今天工作怎么样？', timestamp: '2024-07-15 14:30' },
    { id: '2', sender: 'liushufen', content: '今天工作很顺利，你呢？', timestamp: '2024-07-15 14:35' },
    { id: '3', sender: 'liyongqi', content: '我也不错，晚上我们一起去看电影吧？', timestamp: '2024-07-15 14:40' },
    { id: '4', sender: 'liushufen', content: '好啊，我正好想看最近上映的那部爱情片。', timestamp: '2024-07-15 14:45' },
  ])

  const [newMessage, setNewMessage] = useState('')
  const [currentSender, setCurrentSender] = useState<'liyongqi' | 'liushufen'>('liyongqi')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        sender: currentSender,
        content: newMessage,
        timestamp: new Date().toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  // 自动滚动到底部
  useEffect(() => {
    const messagesContainer = document.getElementById('messages-container')
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
  }, [messages])

  return (
    <div className="communication-container">
      <div className="communication-header">
        <h1>我们的沟通中心</h1>
        <p>专属于我们的私密沟通频道</p>
      </div>

      <div className="communication-main">
        {/* 消息列表 */}
        <div id="messages-container" className="messages-container">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`message-item ${message.sender === currentSender ? 'sent' : 'received'}`}
            >
              <div className="message-sender">
                {message.sender === 'liyongqi' ? '李永奇' : '刘书芬'}
              </div>
              <div className="message-content">
                {message.content}
              </div>
              <div className="message-timestamp">
                {message.timestamp}
              </div>
            </div>
          ))}
        </div>

        {/* 发送消息区域 */}
        <div className="message-input-section">
          <div className="sender-selector">
            <label>发送者：</label>
            <select 
              value={currentSender}
              onChange={(e) => setCurrentSender(e.target.value as 'liyongqi' | 'liushufen')}
            >
              <option value="liyongqi">李永奇</option>
              <option value="liushufen">刘书芬</option>
            </select>
          </div>
          
          <form onSubmit={handleSendMessage} className="message-form">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="输入你的消息..."
              rows={3}
              required
            />
            <button type="submit" className="send-button">发送</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Communication