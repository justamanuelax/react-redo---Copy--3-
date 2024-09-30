
import Child from "./Child";



function Parent(){
    const name = "Alice";
    const age = 19;

    return(
        <div>
        <h1>Parent Component </h1>
        <Child names = { name } ages = { age } />
        </div>
    )
}

export default Parent;