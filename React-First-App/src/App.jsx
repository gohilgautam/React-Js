import First from "./First"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hii, This Is My First React App</h1>
      <h2>I Learn React From Jaynesh Sarkar</h2>
      <img src="https://picsum.photos/200/300" alt="random image" />

      <hr/>
      <h2>Welcome to My React App!</h2>
      <First />
    </>
  )
}

export default App
