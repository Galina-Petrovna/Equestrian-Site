import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Vet from './components/pages/Vet/Vet';
import Learn from './components/pages/Learn/Learn';
import Contacts from './components/pages/Contacts/Contacts';



const router = createBrowserRouter ([
  {
    path: '/',
    element: <Header />,
    
    children: [
      {
        path: '/',
        element: < Home />,
      },

      

      {
        path: '/vet',
        element: <Vet />,
      },
      {
        path: '/learn',
        element: <Learn />,
      },
      // {
      //   path: '/games/write-it',
      //   element: <WriteIt />,
      // },

      {
        path: '/contacts',
        element: <Contacts />,
      },

    ],
    // path: '/',
    // element: <Footer />,
  },
]);



function App() {


  return (
    <div>
      <RouterProvider router={router} />

      <Footer/>
    </div>
    // <BrowserRouter>
    //   <Header />
    // </BrowserRouter>
  );
}



export default App;