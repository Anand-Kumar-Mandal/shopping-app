import { Link } from "react-router-dom";
export function ShopperInvalid() {

    
    return (
        <div className="text-danger">
            <h3>Invalid User Name / Password</h3>
            <div>
                <Link to="/login" className="btn btn-warning">Try again</Link>
            </div>
        </div>
    )
}