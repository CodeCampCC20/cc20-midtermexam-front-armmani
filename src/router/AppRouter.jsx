import { BrowserRouter, Route, Routes } from "react-router"
import LoginPage from "../pages/LoginPage"
import MainLayout from "../layout/MainLayout"
import TodoPage from "../pages/TodoPage"

function AppRouter() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<LoginPage />} />
        <Route path="/todolist" element={<TodoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter