const page = () => {
    return (
      <main className="flex min-h-screen">
        <div className="flex flex-1 mt-20">
          <div className="w-1/5 bg-gray-200">Left Section (1/3)</div>
  
          {/* Right section taking 2/3 of the space */}
          <div className="w-4/5 bg-gray-300">Right Section (2/3)</div>
        </div>
      </main>
    );
  };
  
  export default page;
  