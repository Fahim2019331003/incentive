const page = () => {
  return (
    <main className="min-h-screen xl:px-10 xl:pt-10">
      <div className="flex justify-center max-w-7xl mx-auto pb-4">
        <div className="flex justify-center pt-8 pb-4 text-3xl font-semibold max-w-7xl">
          <h1>New Notice</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <form className="w-full max-w-6xl">
          <div className="flex flex-col items-center py-2 px-4 shadow-lg rounded-lg border border-gray-400 transition duration-300 hover:border-gray-900">
            <textarea
              className="appearance-none bg-transparent border-none w-[64rem] text-gray-700 py-2 px-3 leading-tight focus:outline-none"
              placeholder="Enter notice text"
              rows={5}
              autoFocus
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end my-4">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
