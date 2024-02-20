import {Link} from 'react-router-dom';
function Menu(){
    return(
        <>
         <div id="menu-wrapper">
	<div id="menu">
		<ul>
			<li className="current_page_item">
                <Link to ='/'>Home</Link>
            </li>
			<li>
			<Link to ='/about'>About</Link>
            </li>
			<li>
			<Link to ='/contact'>Contact</Link>
            </li>
		</ul>
	</div>

</div>
<div id="header-wrapper">
	<div id="header">
		<div id="logo">
			<h1><a href="#">SaloniTanna.in</a></h1>
		</div>
	</div>
</div>

        </>
    )
}
export default Menu;