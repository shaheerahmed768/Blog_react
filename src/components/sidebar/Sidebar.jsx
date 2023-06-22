import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
            {/* https://images.pexels.com/photos/4142863/pexels-photo-4142863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://images.pexels.com/photos/7291876/pexels-photo-7291876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem officia iusto libero cumque sequi porro ut sapiente magni, incidunt, in ab veritatis veniam provident. Aspernatur iste magnam eveniet quaerat?
                </p>
             </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
