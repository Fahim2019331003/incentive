import Image from 'next/image';

export default async function Login() {
  return (
    <main className="min-h-screen mr-8 xl:pt-14">
      <body className="flex h-screen">
        <div className="w-1/2 flex justify-center items-center">
          <div
            style={{
              position: 'relative',
              width: '90%',
              height: '90%',
              marginTop: '2rem',
            }}
          >
            <Image
              alt="sust"
              src="/images/logo.png"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center login-bg bg-black">
          <div className="w-3/4">
            <h2 className="text-5xl text-center font-bold text-white mb-8">
              Login to Your Account
            </h2>
            <form>
              <div className="text-xl text-white font-semibold pb-2">Email</div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full py-2 px-4 rounded bg-transparent border border-white text-black"
                />
              </div>
              <div className="text-xl text-white font-semibold pb-2">
                Password
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full py-2 px-4 rounded bg-transparent border border-white text-black"
                />
              </div>
              <div className='pt-4'>
                <button
                  type="submit"
                  className="w-full bg-white text-black py-2 px-4 rounded font-bold text-xl"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </main>
  );
}
