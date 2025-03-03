import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import UserList from './components/UserList.jsx'


function App() {

  return (
      <>
      {/* Header component */}
      <Header />

      {/* Main component */}
      <main className="main">
        {/* Section component */}
        <UserList />

        {/* User details component - Commented out for now */}
        {/* */}

        {/* Create/Edit Form component - Commented out for now */}
        

  </main>
  
  {/* Footer component */}
  <Footer />
  </>
  )
}

export default App
