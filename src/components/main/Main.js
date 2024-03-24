import Card from "./Card"
import {data} from "../../helper/data"

import "./Main.scss"

const Main = () => {
  return (
    <div className="container">
        {data.map((item)=>(

        <Card key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default Main