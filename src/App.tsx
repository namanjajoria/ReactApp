import './App.css'
import Form from './Components/Form'
import Lists from './Components/Lists'
import Navbar from './Components/Navbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function App() {
  return (
    <>
    <h1 className='text-primary mt-5 text-center'><CalendarMonthIcon className='me-3 fs-2 mb-2'/>TODO REACT + TYPESCRIPT<CalendarMonthIcon className='ms-3 fs-2 mb-2'/></h1>
      <Navbar/>
      <Form/>
      <Lists/>
    </>
  )
}

export default App
