import { useBears } from "@/stores/Bears.stores"

function BearC(){

    const { killBears } = useBears()

    return <div>
        <h1>this is child component</h1>
        <button
        onClick={ killBears } 
        className="p-1 bg-green-600 rounded ">kill from child</button>
    </div>
}

export default BearC