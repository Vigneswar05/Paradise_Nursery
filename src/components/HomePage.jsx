import { useState } from 'react';
import './HomePage.css';
import ProductList from './ProductList';

const HomePage = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      {showProducts ? (
        <div className="product-container">
          <ProductList />
        </div>
      ) : (
        <>
          <div className='name'>
            <h1>Welcome to</h1>
            <h1>Paradise Nursery</h1>
            <i><p>~Make your own paradise!</p></i>
            <button className='btn' onClick={handleGetStarted}>Get Started</button>
          </div>
          <div className='info'>
            <h3>Welcome to <strong>Paradise Nursery</strong></h3>
            <p>
              Where young minds blossom and imaginations take flight.
              At Paradise Nursery, we provide a safe, nurturing, and joyful environment that encourages
              children to explore, learn, and grow through play-based learning and creative discovery.
              With experienced educators, vibrant classrooms, and a curriculum designed to inspire curiosity and confidence,
              we are dedicated to laying a strong foundation for your child's future.
              Join us on this beautiful journey—where every day feels like a little piece of paradise.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
