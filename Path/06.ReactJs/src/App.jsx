// import './App.css';
// import Props from './component/Props';

import ItemList from "./component/ItemList";



// import PieChart from "./component/PieChart"

function App() {
  // const [count, setCount] = useState(0)

  // const data = "HELLOOOOOOO!!!"

  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <> 
      <div className="bg-lime-600 min-h-screen">
        {/* <Navigation/>
        <NumberPicker /> */}
        {/* <Props message={data} /> */}
        {/* <PieChart /> */}
        <h1 className="font-bold text-white flex items-center justify-center cursor-pointer hover:text-blue-700">React components</h1>
        {/* <Machine 
        s1 = "x"
        s2 = "y"
        s3 = "z"
        /> */}
      <ItemList items={items} />
      </div>
    
    </>
  )
}

export default App
