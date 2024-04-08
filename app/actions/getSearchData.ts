import axios from 'axios';
import { isValidUser } from './checkApplication';

export const getSearchData = async (search,tableType) => {
  try {

    const data={
      queryText:search,
      tableType
    }
    const tableSearchData = await axios
      .post('/api/search-data', {
        data,
      })
      .then(async (res) => {
        const responseData = res.data;
        const tableData = await Promise.all(
          responseData.map(async (item) => {
            const persons = item.affiliatedPersons;
            // console.log(persons);
            const names = await Promise.all(
              persons.map(async (person) => {
                const response = await isValidUser(person);
                return response?.data?.name;
              })
            );
            // console.log(names);
            return {
              id: item.id,
              title: item.title,
              department: item.department,
              journalName: item.journalName,
              name: item.applicant.name,
              affiliatedPersons: names,
              volAndDate:item.volAndDate,
              status:item.status,
              qIndex:item.qIndex,
            };
          })
        );
        console.log(tableData);
        return tableData;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    console.log(tableSearchData);
    if (!Array.isArray(tableSearchData)) {
      return [tableSearchData];
    } else return tableSearchData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
