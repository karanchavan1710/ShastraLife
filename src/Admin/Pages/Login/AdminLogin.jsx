import React from "react";
import { Button, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    const isLoggedIn = email === 'karan@gmail.com' && password === 'karan@gmail.com';
    if (isLoggedIn) {
      // Redirect to admin dashboard or dashboard page
      window.location.href = "/admin/dashboard";
    }else{
      alert("Invalid credentials. Please try again.");
    }
    console.log("Form submitted", email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex !min-h-screen !w-screen !items-center !justify-center !text-gray-600 !bg-gray-50">
      <div className="relative">
        {/* Background Patterns 
        <div className="hidden sm:!block !h-56 !w-56 !text-indigo-300 !absolute !z-10 !-left-20 !-top-20">
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6) rotate(0)">
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" strokeWidth="1" stroke="none" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
          </svg>
        </div>
*/}
        {/* Login Card */}
        <div className="relative flex flex-col sm:!w-[30rem] !rounded-lg !border-gray-400 !bg-white !shadow-lg !px-4">
          <div className="flex-auto !p-6">
            <div className="mb-10 flex !items-center !justify-center">
              <Link to="/" className="flex !cursor-pointer !items-center !gap-2 !text-indigo-500 !text-3xl !font-black">
                Shastra Life
              </Link>
            </div>
            <h4 className="!mb-2 !font-medium !text-gray-700 xl:!text-xl">Welcome to  Shastra Life!</h4>
            <p className="!mb-6 !text-gray-500">Access Admin account</p>
            
            <form className="!mb-2" onSubmit={handleSubmit}>
              <div className="!mb-2">
                <TextField fullWidth label="Email or Username" variant="outlined" size="small" className="!mb-2" onChange={(e)=>setEmail(e.target.value)} value={email}/>
              </div>
              <div className="!mb-4">
                <TextField fullWidth type="password" label="Password" variant="outlined" size="small" className="!mt-2" onChange={(e)=>setPassword(e.target.value)} value={password}/>
              </div>
              <div className="!mb-2">
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Sign In
                </Button>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;