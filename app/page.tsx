import Card from './components/home/Card';
import Carousel from './components/home/Carousel';

const items = [
  {
    title: 'About Us',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat totam in, quasi pariatur quos necessitatibus magni illum repellendus enim perferendis quaerat officia numquam aliquam mollitia. Architecto enim aut eaque eius.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat totam in, quasi pariatur quos necessitatibus magni illum repellendus enim perferendis quaerat officia numquam aliquam mollitia. Architecto enim aut eaque eius.',
  },
  {
    title: 'Mission & Vision',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat totam in, quasi pariatur quos necessitatibus magni illum repellendus enim perferendis quaerat officia numquam aliquam mollitia. Architecto enim aut eaque eius.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat totam in, quasi pariatur quos necessitatibus magni illum repellendus enim perferendis quaerat officia numquam aliquam mollitia. Architecto enim aut eaque eius.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat totam in, quasi pariatur quos necessitatibus magni illum repellendus enim perferendis quaerat officia numquam aliquam mollitia. Architecto enim aut eaque eius.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat totam in, quasi pariatur quos necessitatibus magni illum repellendus enim perferendis quaerat officia numquam aliquam mollitia. Architecto enim aut eaque eius.',
  },
];

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="pt-5">
        <Carousel />
      </div>
      <div className="flex">
        {/* <div className="min-w-[220px] max-w-[220px] text-center ml-3">
          jhshcjksdhjkhdjkcsdscdcsdcdscdscdcdscdcssdcscsdcsdcsdcsdcsdcsdcsdscddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div> */}
        <div>
          <ul>
            {items.map((item) => (
              <Card title={item.title} description={item.description} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
