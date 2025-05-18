import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
