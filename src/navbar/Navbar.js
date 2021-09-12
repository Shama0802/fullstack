import './navbar.css'
export default function Navbar(){
    return(
        <div classNme="top">
            <div className="topLeft">e-Education</div>
            <div className="topCenter" >
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">VIEW-COURSE</li>
                    <li className="topListItem">CREATE-COURSE</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                <li className="topListItem">LOGIN</li>
                <li className="topListItem">REGISTER</li>
                </ul>
            </div>
        </div>
    )
}