// PasswordGate.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const PasswordGate = ({ correctPassword, children }) => {
  const [input, setInput] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setAccessGranted(true);
    } else {
      alert('Watch the Video to find the password!');
    }
  };

  if (accessGranted) return children;

  return (
    <>
      <div className='fixed top-0 w-screen h-[10rem]'>
        <button className='w-full h-full bg-black opacity-90
          '>
        <div className='relative flex justify-center items-center h-full w-full'>
          <div className="absolute h-fit w-fit scale-75 -bottom-10 left-0 m-auto bg-gray-700">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-700 p-6 rounded shadow-md w-80 text-center"
            >
              <h2 className="text-xl font-semibold mb-4 text-white">Enter Password</h2>
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                className="w-full px-3 py-2 border-2 border-gray-700 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
             
            </form>
          </div>
        </div>
        </button>
      </div>
    </>
  );
};
PasswordGate.propTypes = {
  correctPassword: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PasswordGate;
 
