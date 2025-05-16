import { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'

function App() {



  return (
    <>
      <div>
        <TaskList />
        <TaskDetail />
        <BrowserRouter>
          <Routes>
            <>
              <Route path="/task/${task.id}" element={<TaskDetail allTasks={mockData} />} />
            </>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
