// there are three ways to create the function react component
// method one: default export
// method two:  arrow functional component
// default retunr function component 

import React from 'react'; // Added import statement

const Header = () => { // Renamed component to Header
  return (
    <>
      <header>this is heading 1 dodo chari</header>
    </>  
  )
}

export default Header; // Export the component

