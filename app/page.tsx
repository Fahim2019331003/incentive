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
    <main className="min-h-screen mr-8 xl:pt-14 w-full">
      <Carousel />
      <div>
        {items.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    </main>
  );
}
