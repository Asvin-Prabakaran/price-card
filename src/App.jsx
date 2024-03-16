import './App.css'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Card from './card'

function App() {
  let data=[
    {
      plan:"free",
      price:0,
      features:[
        {
          name: "Single User",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Ultimated Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects",
          enabled : false
        },
        {
          name: "Dedicated Phone Support",
          enabled : false
        },
        {
          name: "Free Subdomain",
          enabled : false
        },
        {
          name: "Monthly statues Reports",
          enabled : false
        }
      ]



    },
    {
      plan:"plus",
      price:9,
      features:[
        {
          name: "5 User",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Ultimated Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects",
          enabled : true
        },
        {
          name: "Dedicated Phone Support",
          enabled : true
        },
        {
          name: "Free Subdomain",
          enabled : true
        },
        {
          name: "Monthly statues Reports",
          enabled : false
        }
      ]
      

    
    },
    {
      plan:"pro",
      price:49,
      features:[
        {
          name: "Unlimited User",
          enabled : true
        },
        {
          name: "50GB Storage",
          enabled : true
        },
        {
          name: "Ultimated Public Projects",
          enabled : true
        },
        {
          name: "Community Access",
          enabled : true
        },
        {
          name: "Unlimited Private Projects",
          enabled : true
        },
        {
          name: "Dedicated Phone Support",
          enabled : true
        },
        {
          name: "Free Subdomain",
          enabled : true
        },
        {
          name: "Monthly statues Reports",
          enabled : true
        }
      ]
      
    },
  ]


  return (
    <div className="box">
    
      <div className="container">
        <div className="row">
          {data.map((item,index)=>{
            return <Card item={item} key={index}/>;
          })}

        
        </div>
      </div>
    </div>
   

  )

}

export default App
