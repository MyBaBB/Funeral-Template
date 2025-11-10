 import Smiley from "/Smiley.jpg";

const NewBody = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-screen overflow-hidden bg-green-500">
    <div>
        <img src={Smiley} alt="Smiley" className="h-full w-full object-cover " />
    </div>
   </div>
  )
}

export default NewBody