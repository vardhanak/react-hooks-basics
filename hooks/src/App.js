import React from "react";
const ThemeContext = React.createContext("dark")

function App() {
  const context = React.useContext(ThemeContext)
  const [state, setstate] = React.useState({ age: 5, siblings: 10 })
  const [count, setcount] = React.useState(0)


  React.useEffect(() => {
    document.title = `You are ${state.age} years old`
  }, [state.age])

  const increaseage = () => {
    setstate(ele => {
      return { ...ele, age: ele.age + 1 }
    }
    )

  }
  const increasesibiling = () => {
    setstate(ele => {
      return { ...ele, siblings: ele.siblings + 1 }
    }
    )

  }
  return (
    <div className="App">
      <h1>Today I am {state.age} years old.</h1>
      <h1>I have {state.siblings} siblings.</h1>
      <button type="button" onClick={increaseage} >Get Older!</button>
      <button type="button" onClick={increasesibiling} >More siblings!</button>
      <h1>Count value : {count}</h1>
      <button type="button" onClick={() => setcount(ele => ele + 1)} >plus(+)</button>
      <button type="button" onClick={() => setcount(ele => ele - 1)} >Minus(-)</button>
      <h1>Context value : {context}</h1>
    </div>
  );
}

export default App;