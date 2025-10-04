import React from 'react'

export default function Login(props) {
  return (
    <div>
        {
            props.log && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-base-100 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Login</h2>

                        <input
                            type="text"
                            placeholder="Username"
                            className="input input-bordered w-full mb-3"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full mb-3"
                        />

                        <div className="flex justify-between">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setIsLoggedIn(true);
                                    setOpenLogin(false); // close modal after login
                                }}
                            >
                                Login
                            </button>
                            <button
                                className="btn"
                                onClick={() => setOpenLogin(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
      
    </div>
  )
}


