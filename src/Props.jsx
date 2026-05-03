import './App.css'

function Add({user}){
 
    return(
        <div >
            <div >          
                  <h1>props call</h1>
            </div>

            <h1>Name:{user.name}</h1>
            <br></br>
            <h1>Age:{user.age}</h1>
            <br></br>
            <h1>{user.email}</h1>
        
          
        </div>
        
    )
}

export default Add;