import Carousel from '../components/dashboard/Carousel';
import Tabletest from '../components/dashboard/Tabletest';

const getTable = async () => {
  try {
    const response = await fetch(
      `https://api-generator.retool.com/ejMJvt/data`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      return [data];
    } else return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const getSearchData = async (search) => {
  try {
    const response = await fetch(
      `https://api-generator.retool.com/ejMJvt/data/${search}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      return [data];
    } else return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const Page = async () => {
  const tableData = await getTable();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="pt-5">
        <Carousel />
      </div>

      <div className="mt-20">
        <Tabletest title={'Granted Incentives Report'} tableData={tableData} />
      </div>
    </main>
  );
};

export default Page;
