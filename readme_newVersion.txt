import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProtectedRoute from "./components/ProtectedRoute" ;
import './App.css';

function App() {
  return (
    <Routes>  {/* can only use Route inside Routes in reac-router-dom v6 */}
        <Route  path="/login" element={<LoginForm />} />
        <Route  path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />   {/* sending  <Home /> as children */}
        <Route  path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />   {/* sending  <Cart />as children */}
        <Route  path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />    {/* sending  <Products /> as children */}
  </Routes>
  );
}

export default App;
