export const getTable = async () => {
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
