import { useEffect } from "react"

export function TasksList() {
    useEffect(() => {
        console.log("página cargada");
    }, []);
    return <div>TasksList</div>;
}