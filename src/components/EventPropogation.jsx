 import "./EV.css";
 
 export const EventPropagtion = () => {
  const handleGrandParent = () => {
    console.log("Grand Parent Div Clicked");
  };
    const handleParent = () => {   
    console.log("Parent Div Clicked");

  }
    const  handleChild = (event) => {
        console.log(event);
    console.log("Child Div Clicked");
  }
  
  
    return (
    <section className="container">
    <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParent}>
            <button className="c-div" onClick={handleChild}>
                <p>Child div</p>
            </button>
        </div>
    </div>
    </section>
  )
    };