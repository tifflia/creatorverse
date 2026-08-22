import './App.css'
import { useRoutes, Link } from 'react-router-dom'
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';

function App() {

  // TODO: add a no match case
  let element = useRoutes([
    {
      path: "/",
      element:<ShowCreators />
    },
    {
      path: "/creator/:id",
      element:<ViewCreator />
    },
    {
      path:"/edit/:id",
      element: <EditCreator />
    },
    {
      path:"/new",
      element: <AddCreator />
    }
  ]);

  return (
    <div className="App">
      <header className="header">
        <div className="headerContent">
          <h1>Creatorverse</h1>
          <nav className="headerNav">
            <Link to="/"><button className="headerBtn">View All Creators</button></Link>
            <Link to="/new"><button className="headerBtn headerBtnPrimary">Add a Creator</button></Link>
          </nav>
        </div>
      </header>
      {element}
    </div>
  )
}

export default App;
