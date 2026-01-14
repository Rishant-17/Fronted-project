
export const  EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`Welcome ${user} to our website`)
        }
    const handleHover = () => {
        alert("Hey Thanks for hovering over me")
        }
       
  
  return (
    <>
       <WelcomeUser onClick= {() => handleWelcomeUser("Rishant maurya") } 
       onMouseEnter={handleHover} />
    </>
  )
} 


const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log(`he user,Welcome to our website!`);
        onClick();
        }
    return (
        <>
            <button onClick={props.onClick} >Click</button>
            <button onMouseEnter={props.onMouseEnter} >Hover me</button>
            <button onClick={handleGreeting} >Greeting</button>
        </>
    )
}



