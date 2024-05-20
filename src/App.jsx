import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TRAVEL EXPLORERS</h1>
      </header>
      <nav className="navbar">
        <ul>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">TRECKKING</a></li>
          <li><a href="#">WORLD-TOUR</a></li>
          <li><a href="#">ADVENTUROUS</a></li>
        </ul>
      </nav>
      <main className="left">
        <img src="360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg" alt="" className="main-image" />
        <ul>
          <li className="line01">
            Feel Great.<br />Body and Mind.
          </li>
          <li className="line02">
            Recusandae aspernatur quia quibusdam possimus, incidunt quam voluptas beatae magnam ab accusantium blanditiis tenetur. Delectus nostrum eos nemo aut optio culpa qui eligendi, at officiis. In beatae vel culpa ea!
            Deleniti vitae labore facilis dicta aliquid quia non harum enim? Voluptatum alias enim, dignissimos at sunt ipsa repellendus facere magni iure eum praesentium excepturi voluptatem vero temporibus exercitationem? Rem, reiciendis.
            Repellendus perspiciatis vero dolores quas, voluptas amet optio ex error reprehenderit corrupti possimus laborum officia deleniti fugit odit cupiditate vel harum repellat sed voluptatum sunt necessitatibus! Eius itaque quo perferendis.
            <button className="joinNow"> JOIN NOW</button>
          </li>
        </ul>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h2>Contact Details</h2>
            <hr />
            <h3>Email: example@email.com</h3>
            <h3>Phone: +123 456 7890</h3>
            <h3>Instagram ID: healthyway@gmail.com</h3>
            <h1>FOLLOW US..</h1>
          </div>
          <img src="th.jpeg" alt="Nature" className="footer-image" />
          <div>
            <h1>Great Things To be..</h1>
            <hr />
            <h3>Explore the world..</h3>
            <h3>Find Yourself with a Peace.</h3>
            <h3>Live a Life with Nature...</h3>
            <h3>Being Explorer and be a healthy weight..</h3>
          </div>
        </div>
        <ul>
          <li>Travel</li>
          <li>Explore</li>
          <li>Enjoy</li>
          <li>Memories</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
