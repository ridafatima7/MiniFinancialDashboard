import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">404 Error</h1>
        <p className="text-medium text-gray-700">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
