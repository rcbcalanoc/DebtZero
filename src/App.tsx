import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContentContainer } from '@/components/layout/ContentContainer'
import Dashboard from '@/pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ContentContainer />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App