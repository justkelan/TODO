import { useEffect, useState } from "react"
import ViewTask from "./ViewTask"

const ShowAllTask = () => {
    const [msg, setMsg] = useState(null)
    const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        const req = new Request(
            'http://localhost:3000/tasks', {
            headers: {
                "content-type": "application/json"
            }
        }
        )

        fetch(req)
            .then(res => res.json())
            .then(data => {
                //console.table(data)
                if(!data.message)
                setAllTasks(data)
            else 
            setMsg(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <p className="text-3xl text-slate-600">Tasks found: {allTasks.length}</p>
            <div className="grid grid-cols-4">
            {allTasks.map(task => {
                return(
                    <ViewTask key={task._id} task={task} />
                )
            })}
            </div>
        </>
    )
}

export default ShowAllTask