import './App.css'
import Banner from './components/Banner'
import Navbar from './components/headers/navbar'
import Recipes from './components/Our_Recipes/Recipes'

function App() {

  return (

    <>

      <div className='container mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>

    </>
  )
}

export default App
