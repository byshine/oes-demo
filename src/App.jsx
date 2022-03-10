import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Chrome from './assets/chrome.svg'
import Firefox from './assets/firefox.svg'
import PluginSample from './assets/plugin.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-50 bg-graph">
    <div className="px-20 flex pt-5 items-center justify-between">
      <div className="font-bold text-2xl uppercase tracking-widest text-cyan-500">Cortico</div>
      <ul className="flex space-x-4 text-base">
        <li>About</li>
        <li>Sign Up</li>
      </ul>
      </div>
    <div className="bg-gradient-to-t h-screen text-gray-700 p-20">
      <h1 className="text-6xl mt-20 font-bold">Replace tedious tasks with ease.</h1>
      <h4 className="text-xl font-bold mt-4"><span className="text-cyan-500">Oscar Enhancement Suite</span>, a <span className="font-bold widest">Cortico</span> plugin</h4>


      
      <div className="flex space-x-4 items-start mt-5">
        <button className="flex space-x-2 border rounded-md p-2 w-[200px]">
        <img className="w-10 h-10" src={Chrome} />
        <p className="text-sm">Available in the <br/> <span className="text-md font-bold">Chrome Web Store</span></p>
        </button>

        <button className="flex space-x-2 border rounded-md p-2 w-[200px]">
        <img className="w-10 h-10" src={Firefox} />
        <p className="text-sm">Available in the <br/> <span className="text-md font-bold">Firefox Web Store</span></p>
        </button>
      </div>

      <p className="mt-10 text-gray-600 text-2xl font-semibold max-w-[1000px]">Let the plugin do the work for you. Insert more clever marketing sentences here.</p>
     
      <div>
      </div>
    
    </div>
    </div>
  )
}

export default App
