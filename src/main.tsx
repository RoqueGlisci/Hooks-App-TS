
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './08-useReducer/intro-reducer';
import { MainApp } from './09-useContext/MainApp';

// import {createBrowserRouter, RouterProvider} from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainApp/>,
//   },
// ]);


import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  <BrowserRouter>
    {/* <RouterProvider router={router} /> */}
    <MainApp/>
  </BrowserRouter>
  
)

