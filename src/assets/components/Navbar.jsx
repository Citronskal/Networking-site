export const NavigationBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    // You can add more logic here for actual search functionality
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Eatgether</div>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/activity">Activity</a>
          </li>
          <li>
            <a href="/feed">Feed</a>
          </li>
          <li>
            <a href="/starter">Starter</a>
          </li>
          <li>
            <a href="/testimony">Testimony</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
