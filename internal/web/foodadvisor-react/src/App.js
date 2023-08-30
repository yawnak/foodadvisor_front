import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  NavLink,
} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
