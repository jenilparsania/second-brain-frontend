
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon';

function App() {

  function buttonOnClick(){
    console.log("button was clicked");
    
  }

  return (
    <>
      <Button  size="sm" variant='primary' text='Share' onClick={buttonOnClick}/>
      <Button  size="md" variant='secondary' text='Add Content' startIcon={<PlusIcon/>}/>
      <Button  size="lg" variant='secondary' text='Add Content'/>
    </>
  )
}

export default App
