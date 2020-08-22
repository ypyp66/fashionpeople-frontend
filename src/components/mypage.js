import React from 'react'
import Imgrid from './Imgrid';
import './css/Mypage.css';

function Mypage() {
    return (
        <div>
        <header>
        </header>
        
        <section>
        <nav>
            { /* side bar 예비 */}
        <ul>
      <li><a href="#">MYPAGE</a></li>
      <li><a href="#">EDIT</a></li>
      <li><a href="#">ACCOUNT</a></li>
    </ul>
        </nav>
  
        <article>
            <h1>My Page</h1> <br></br>
            
            <Imgrid></Imgrid>
        </article>
        </section>
        
        <footer>
  
        </footer>
        </div>
    )
}

export default Mypage