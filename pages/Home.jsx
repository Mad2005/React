import React, { useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import axios from 'axios';

function Home() {
  const[count,setcount]=useState(0);
  const[name,setname]=useState("MADHU");
  const[data,setData]=useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    },
    phone: '',
    website: ''
  });


  useEffect(() => {
console.log("useEffect is called");
  }, [count])

  useEffect(() => {
  axios.get("http://localhost:5000/getuser")
  .then((response) =>{
    setData(response.data);
    console.log("Data fetched:",response.data);
  }
  )
.catch ((err) => {
      console.log(err);
    });
  }, []);
  

  const handleFormChange = (event) => {
    const { id, value } = event.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [id]: value
    }));
  };
  const handleAddUser = () => {
    const user = {
      id: data.length + 1,  
      name: newUser.name,
      company: { name: newUser.company, catchPhrase: newUser.catchPhrase, bs: 'e-enable strategic applications' },  
      phone: newUser.phone,
      website: 'ramiro.info' 
    };
    
    setData(prevData => [...prevData, user]);
    setNewUser({ name: '', company: '', catchPhrase: '', phone: '' });  // Clear form
  };









  return (
    <div className="home-container">
      {/* <h1>Welcome to my home Page</h1>
      <h2>count is {count}</h2>
      <button onClick={() => setcount(count+1)} class="btn">Click to increment</button>
      <button onClick={() => setcount(count-1)} class="btn">Click to decrement</button>
      <button onClick={() => setcount(0)} class="btn">Reset</button>
      <br></br>
      <br></br>
      <h2>My name is {name}</h2>
      <button onClick={() => setname("MADHUMITHA")} class="btn">Full name</button>
      <button onClick={() => setname("MADHU")} class="btn">Reset Name</button>
      <br></br>
      <br></br> */}

      <form id='form' className='card'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={newUser.name}
          onChange={handleFormChange}
          placeholder='name'
        />

        <label htmlFor='company'>Company</label>
        <input
          type='text'
          id='company'
          value={newUser.company}
          onChange={handleFormChange}
          placeholder='company'
        />

        <label htmlFor='catchPhrase'>Catch Phrase</label>
        <input
          type='text'
          id='catchPhrase'
          value={newUser.catchPhrase}
          onChange={handleFormChange}
          placeholder='catchphrase'
        />

        <label htmlFor='phone'>Phone</label>
        <input
          type='number'
          id='phone'
          value={newUser.phone}
          onChange={handleFormChange}
          placeholder='phone'
        />

        <button type='button' onClick={handleAddUser} className="btn">Add User</button>
      </form>



    {data.map((item) =>(
      <div key={item.id} className='card'>
        <h2>{item.username}</h2>
        {/* <p>
          <strong>ID:</strong> {item.id}
        </p> */}
        <p>
          <strong>Email:</strong> {item.email}
        </p>
        <p>
          <strong>Password:</strong> {item.password}
        </p>
        <p>
          <strong>Avatar:</strong> {item.avatar}
        </p>
        {/* <p>
          <strong>Phone:</strong> {item.phone}
        </p>
        <p>
          <strong>Website:</strong> {item.website}
        </p> */}
        </div>
    ))}



    {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
    
      {/* <header className="hero-banner">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to amazing experiences starts here.</p>
        <button className="cta-button">Get Started</button>
      </header>
      
      <section className="features">
        <div className="feature">
          <h2>Feature One</h2>
          <p>Discover the best features we offer.</p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>Learn more about our incredible services.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>Explore our unique and tailored solutions.</p>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer> */}

    



      
    </div>
  );
}

export default Home;
