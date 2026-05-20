
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import Condition from './Condition.jsx'
import List from './List.jsx'
function App() {

  return (
    <>
      <Header />
      <Food />
      <Card/>
      <Button/>
      <Student name="John" age={20} />
      <Condition isLoggedIn={true} name="Lucky" />
      <List />
      <Footer />
    </>
  )
}

export default App
