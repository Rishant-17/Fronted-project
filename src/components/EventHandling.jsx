import "./EV.css";

const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event.type); // "click"
    alert("Button was clicked!");
  };

  const handleWelcomeUser = () => {
    console.log("Welcome User!");
  };

  return (
    <section className="container">
      {/* Simple event handler */}
      <button onClick={handleButtonClick}>
        Click me
      </button>

      {/* Inline arrow function (only when needed) */}
      <button onClick={() => handleButtonClick()}>
        Click me 2
      </button>

      {/* Inline logging of event */}
      <button onClick={(event) => console.log(event)}>
        Inline function
      </button>

      {/* Inline alert – correct way */}
      <button onClick={() => alert("Hey, I am inline event function")}>
        Click me 3
      </button>

      {/* Function without event */}
      <button onClick={handleWelcomeUser}>
        Click me 4
      </button>
    </section>
  );
};

export default EventHandling;
