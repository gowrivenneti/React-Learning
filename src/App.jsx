
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import Condition from './Condition.jsx'
import List from './List.jsx'
import Methods from './Methods.jsx'
import ListExample from './ListExample.jsx'
function App() {
    const fruits = [{id:1, name:'Apple',calories: 95}, 
        {id:2, name:'Banana',calories: 105}, 
        {id:3, name:'Cherry',calories: 50}, 
        {id:4, name:'Date',calories: 110}, 
        {id:5, name:'Elderberry',calories: 80}];
  const animals = [{id:1, name:'Dog'}, 
    {id:2, name:'Cat'}, 
    {id:3, name:'Elephant'}, 
    {id:4, name:'Giraffe'}, 
    {id:5, name:'Lion'}];
  return (
    <>
      <Header />
      <Food />
      <Card/>
      <Button/>
      <Student name="John" age={20} />
      <Condition isLoggedIn={true} name="Lucky" />
      <List/>
      <Methods />
      {fruits.length>0 && <ListExample category="Fruits" items={fruits} />}
      {animals.length>0 && <ListExample category="Animals" items={animals} />}
      <Footer />
    </>
  )
}

export default App
