import Profile1 from '../Components/Assets/profile-pic.png'

import Profile2 from '../Components/Assets/profile-pic2.png'

import Vimi from './visionmissionpage'

import Values from './values'

const ourTeam = () => {
    return (
       <>
        <div className="OurTeam-heading">Our Team</div>
        <div className="OurTeam">
            <div className="OurTeam-para">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
         <div className="OurTeam-members">

         <div className="OurTeam-members-cards">
         <img src={Profile1}/>
         
         <p className="OurTeam-members-cards-heading">Mr Naman Bajpai</p>
         
         <p className="OurTeam-members-cards-subHeading">Founder</p>

         <ul>
         <li><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="2" d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z"/><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></g></svg></a></li>

<li><a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5m2.938 1.719a1.719 1.719 0 1 0 0 3.437a1.719 1.719 0 0 0 0-3.437m9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437c1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z"/></svg></a></li>

<li><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574z"/></svg></a></li>
<li><a><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8c-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672z"/></svg></a></li>
         </ul>
         
         </div>
         <div className="OurTeam-members-cards">
         <img src={Profile2}/>
         
         <p className="OurTeam-members-cards-heading">Mr Harshit Mishra</p>
         
         <p className="OurTeam-members-cards-subHeading">Co-Founder</p>

         <ul>
            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-width="2" d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13z"/><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></g></svg></a></li>

            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5m2.938 1.719a1.719 1.719 0 1 0 0 3.437a1.719 1.719 0 0 0 0-3.437m9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437c1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z"/></svg></a></li>

            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574z"/></svg></a></li>
            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8c-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672z"/></svg></a></li>
         </ul>
         
         </div>

         </div>
        </div>

        <div className="OurGoal">
            <div className="OurGoal-heading">OUR GOAL</div>

            <div className="OurGoal-para-1">PUDI's primary goal is to increase the effectiveness of the post-harvest food chain, and provide farmers one stop shop for all Shelf life extension products.</div>

            <div className="OurGoal-para-2">
            PUDI is committed to conducting research and providing the safest, most effective, and environment friendly packaging products that can reduce the dump ratio and increase exports.
            </div>

            <div className="OurGoal-para-3">
            PUDI works diligently to control shelf life and partners with top research institutions.
            </div>


        </div>
        <Values />
        <Vimi />
       </>
    )
}

export default ourTeam