import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Latest from "@/pages/latest/Latest";

const Router = () => {
    return (
        useRoutes([
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "latest",
                element: <Latest/>,
            },
        ])
    )
}

export default Router