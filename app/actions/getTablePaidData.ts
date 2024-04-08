import axios from 'axios';
import { isValidUser } from './checkApplication';

export default async function getTableData() {
  const res = await axios
    .post('/api/paidApplications', {})
    .then(async (res) => {
      const data = res.data;
      const tableData = await Promise.all(
        data.map(async (item) => {
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
      return null;
    });
  return res;
}
