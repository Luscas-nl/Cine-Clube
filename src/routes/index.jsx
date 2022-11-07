import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthGoogleContext } from "../contexts/authGoogle"

function PrivateRoute() {

    const { signed } = useContext(AuthGoogleContext)

    return signed ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute