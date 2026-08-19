import React, { createContext, useState, useContext } from 'react'

// 1. Create context
const ThemeContext = createContext()

export function ThemedBox() {
  // 3. Consume context
  const theme = useContext(ThemeContext)

  const styles = {
    padding: '20px',
    margin: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
  }

  return <div style={styles}>Current theme: {theme}</div>
}

function App() {
  const [theme, setTheme] = useState('light')

  // 2. Provide context
  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ textAlign: 'center' }}>
        <h2>Theme Toggle</h2>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>

        <ThemedBox />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
