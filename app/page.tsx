import getCurrentUser from './actions/getCurrentUser';
import EmptyState from './components/EmptyState';
const hello = 'hello';

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState subtitle="You have to login first" title="Sorry" />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5  xl:px-10 xl:pt-10">
      <div className="gap-10 mt-24 ">This is the home page test</div>
    </main>
  );
}
