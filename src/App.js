import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import Vet from './components/pages/Vet/Vet';
import Learn from './components/pages/Learn/Learn';
import Contacts from './components/pages/Contacts/Contacts';
import Photo from './components/pages/Photo/Photo';

const router = createBrowserRouter (
  [
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

      {
        path: '/photo',
        element: <Photo />,
      },
     
      {
        path: '/contacts',
        element: <Contacts />,
      },

    ],
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />

      <Footer/>
    </div>
    
  );
}

export default App;
