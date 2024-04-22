import React from 'react'
import Notice from '../components/new-notice/Notice'
import getCurrentUser from '../actions/getCurrentUser';

const page = async() => {

  const user = await getCurrentUser();
  const role = user?.role ? user?.role : 'NONE';

  if (role !== 'ADMIN' && role!=="COORDINATOR" ) {
    return (
      <main className="flex flex-col">
        <div className="m-16">
          <div className="mt-20 min-h-screen">
            You are not allowed to view this page.
          </div>
        </div>
      </main>
    );
  }


  return (
    <main className="min-h-screen xl:px-10 xl:pt-10">
      <Notice/>  
    </main>
  )
}

export default page