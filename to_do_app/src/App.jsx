import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
 const todos =[
  {input: "Hello! Add your First todo!", complete: true},
  {input: "Get the Groceries!", complete: false},
  {input: "Learn how to webdesign!", complete: false},
  {input: "Say Hi to Gran Gran!", complete: false},
 ]

  return (
  <>
        <Header/>
        <Tabs/>
        <TodoList/>
        <TodoInput/>
        </>
  
  )
}

export default App
