import React from 'react';


function Header({logout, user}) {

    return(

        <header className="header colored sticky-header" data-scroll="out">
			<div className="c-container">
				<div className="nav-items">
					<a href="/"><img className="site-logo" src="" alt=""/></a>

					<div className="form-inline">
							<a className="nav-link" href="/login"><button onClick={logout} className="btn btn-outline-white mr-2" type="button">{(user) ? "Logout" : "Login"}</button></a>
							
							{(user) ? null : <a className="nav-link" href="/signup"><button className="btn btn-outline-white mr-2" type="button">Sign Up</button></a>}

							{(user) ?  <a className="nav-link" href="/locationstable"><button className="btn btn-outline-white mr-2" type="button">Show Locations</button></a> : null}

							{(user) ?  <a className="nav-link" href="/reactionpage"><button className="btn btn-outline-white mr-2" type="button">Show Reactions</button></a> : null}


					</div>

				</div>

			</div>
		</header>

    )
}

export default Header;