import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className='font-Poppins'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
export default App;