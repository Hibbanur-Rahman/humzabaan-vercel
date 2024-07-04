import logo from '../assets/images/Humzabaan_Footer_Logo.svg'
const DashboardSidebar=()=>{
    return (
        <div className="dashbaord-sidebar m-0 p-0 p-4 pt-0">
            
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="sidebar-menu mt-4">
                <div className="menu-items active d-flex rounded-3 align-items-center p-3 py-2 mb-3">
                    <i className='fa-solid fa-gauge fs-5 me-2'></i>
                    <p className='m-0 p-0 fs-5'>Dashboard</p>
                </div>
                <div className="menu-items d-flex rounded-3 align-items-center p-3 py-2 mb-3">
                    <i className='fa-solid fa-gauge fs-5 me-2'></i>
                    <p className='m-0 p-0 fs-5'>Dashboard</p>
                </div>
                <div className="menu-items d-flex rounded-3 align-items-center p-3 py-2 mb-3">
                    <i className='fa-solid fa-gauge fs-5 me-2'></i>
                    <p className='m-0 p-0 fs-5'>Dashboard</p>
                </div>
                
            </div>
        </div>
    )
}

export default DashboardSidebar;