import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里应该是实际的认证逻辑，暂时使用模拟数据
    if (password === '107520') {
      navigate('/')
    } else {
      setError('密码错误，请重试')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>永芬星轨</h1>
        <h2>爱情身份认证</h2>
        <p className="login-subtitle">我们的每一次投入，都在点亮共同的未来</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="password">专属密码</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入双方约定的专属密码"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="login-button">
            进入我们的世界
          </button>
          
          <div className="auth-options">
            <button type="button" className="auth-option-button">
              <span className="auth-icon">👆</span> 指纹识别
            </button>
            <button type="button" className="auth-option-button">
              <span className="auth-icon">👤</span> 面部识别
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login