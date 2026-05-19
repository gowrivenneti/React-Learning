
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import Condition from './Condition.jsx'
function App() {

  return (
    <>
      <Header />
      <Card/>
      <Button/>
      <Student name="John" age={20} />
      <Condition isLoggedIn={true} name="Lucky" />
      <Food />
      <Footer />
    </>
  )
}

export default App
