import Footer from "./Footer";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
function About(){
    return(
        <>
        <Menu />
       
       <div id="wrapper"> 
           <div id="page-bgtop"></div>
           <div id="page">
               <div><img src="images/pics01.jpg" width="920" height="300" alt="" /></div>
               <div id="content">
                   <div className="post">
                       <h2 className="title"><a href="#">About</a></h2>
                       <div>&nbsp;</div>
                       <div className="entry">
                           </div>
                 <p>Hello</p>
                   </div>
                   
                   <div>&nbsp;</div>
               </div>
               <Sidebar />
               <div>&nbsp;</div>
           </div>
           <div id="page-bgbtm"></div>
       </div>
       <Footer />
               
        </>
    )
}
export default About;