import React from 'react';

function Nav(props) {
  const {
    contactSelected,
    setContactSelected
  } = props;

  return (
    <header  className="flex-row">
     <h2> <a href="/"> Cesar Gonzalez</a></h2>
        <nav>
          <ul className="flex-row">
          <li>
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>

                <li>
                    <a href="#Projects">Projects</a>
                </li>

                <li className={` ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          </ul>
        </nav>
    </header>
  );
}

export default Nav;