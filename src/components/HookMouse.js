import React,{useEffect,useState} from 'react'

function HookMOuse() {
    const [x,setX] = useState(0)
    const [y, setY] = useState(0);

    const logMousePosition = e =>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(() =>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)

        return ()=>{
            console.log('component unmounting ')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            Hook X - {x},  Y - {y}
        </div>
    )
}

export default HookMOuse
