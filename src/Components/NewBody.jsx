import PasswordGate from "./PasswordGate"

 

const NewBody = () => {
  return (
    <div>
     
       <div className="BodyWrapper2 w-fit ">
            <div className="Body2 relative flex items-center justify-center w-fit m-auto"> 
              < PasswordGate correctPassword="Velvet_Cipher" />
    <video   controls className="w-full h-auto">
      <source src="https://images.brainbuddys.com/Videos/11-2-joypix_security12.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </div>
     
   </div>
  )
}

export default NewBody