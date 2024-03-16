import { TiTick } from "react-icons/ti";


function Card({item}){
  
return(
    
    <div className="col">
    <div className="card mb-4">
          
          <div className="card-body">
          <h4 className="card-title">{item.plan}</h4>
            <h1 className="card-title pricing-card-title">${item.price} <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
             {
                item.features.map((feature,index)=>{
                        return <li key={index}>
                            {
                                feature.enabled ? (<span> <TiTick/> {feature.name} </span>):
                               (<> <del>{feature.name}</del></>)
                            }
                            </li>
                })
             }
            </ul>
            <button  type="button" className="btn btn-outline-primary">button</button>
          </div>
        </div>
        </div>

)
}


export default Card