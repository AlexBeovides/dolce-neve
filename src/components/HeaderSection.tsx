import { NavBar } from "./NavBar";

export function HeaderSection({setLock}:{setLock:any}) {
  return (
    <div className='main-header'>
      <NavBar setLock={setLock}/>
      
      <div className="landing-img"></div>
    </div>
  )
}