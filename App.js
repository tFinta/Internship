import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace this URL with your own image link */}
        <img
          src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" 
          className="App-logo" 
          alt="Vape Store Logo" 
        />
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Replace with your company name</h1> {/* Replace with your company name */}
        <p>Replace with your tagline</p> {/* Replace with your tagline */}
      </header>

      <section id="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product">
            <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="Vape Product 1" />
            <h3>Vape Product 1</h3>
            <p>Price 1</p>
          </div>
          <div className="product">
            <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="Vape Product 2" />
            <h3>Vape Product 2</h3>
            <p>Price 2</p>
          </div>
          <div className="product">
            <img src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg" alt="Vape Product 3" />
            <h3>Vape Product 3</h3>
            <p>Price 3</p>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>Replace with your company description</p> {/* Replace with your company description */}
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: Replace with your contact email</p> {/* Replace with your contact email */}
        <p>Phone: Replace with your phone number</p> {/* Replace with your phone number */}
      </section>

      <footer>
        <p>&copy; Replace with your company details</p> {/* Replace with your company details */}
      </footer>
    </div>
  );
}

export default App;

