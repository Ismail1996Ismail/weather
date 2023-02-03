import Search from "./Search";
import Watch from "./Watch";
import Panels from "./Panels";
import CentralLine from "./CentralLine";
import '../css/Sidebar.css';

function Sidebar(){
  return(
    <div className="Sidebar">
      <Search/>
      <Watch/>
      <CentralLine/>
      <Panels/>
    </div>
  )
}
export default Sidebar