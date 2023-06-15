import React, { useState } from "react";
// import logo from '../../logo.png'
import styles from "./index.module.css";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const [btn, setBtn] = useState(false);
  return (
    <header className={styles.nav}>
      <h1> Logo</h1>
      <nav>
        <ul className={btn ? `${styles.menu} ${styles.active}` : styles.menu} >
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Login </a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} />
          </li>
        </ul>
      </nav>
      <div
        onClick={() => {
          setBtn(!btn);
        }}
        className={styles.mobile_btn}
      >
        {btn ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar;




// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import {
//   AiOutlineSearch,
//   AiOutlineMenu,
//   AiOutlineClose,
//   AiOutlineUser,
// } from "react-icons/ai";

// const Navbar = () => {
//   const [btn, setBtn] = useState(false);
//   return (
//     <header className={styles.nav}>
//       <h1> Logo</h1>
//       <nav>
//         <ul className={btn ? `${styles.menu} ${styles.active}` : styles.menu}>
//           <li>
//             <a href="/">Learn More</a>
//           </li>
//           <li>
//             <a href="/">Login</a>
//           </li>
//           <li>
//             <a href="/">Sign up</a>
//           </li>
//           <li>
//             <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
//           </li>
//           <li>
//             <AiOutlineUser size={25} />
//           </li>
//         </ul>
//       </nav>
//       <div
//         onClick={() => {
//           setBtn(!btn);
//         }}
//         className={styles.mobile_btn}
//       >
//         {btn ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
//       </div>
//     </header>
//   );
// };

// export default Navbar;
