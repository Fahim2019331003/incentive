'use client';
import getApplicationWithIdsClient from '@/app/actions/getApplicationWithIdsClient';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import ApplicationDetails from './ApplicationDetails';
import EditApplicationDetails from './EditApplicationDetails';

const ApplicationClient = ({ applicationDetails, user }) => {
  const router = useRouter();
  const [datas, setDatas] = useState(applicationDetails);
  const [loading, setLoading] = useState(1);
  const [isEditOpen, setEditOpen] = useState(0);
  const [changed, setChanged] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const application: any = await getApplicationWithIdsClient(
          applicationDetails.id
        );

        console.log(application);

        if (!application) {
          router.push('/404');
        }
        setDatas(application);
        setLoading(0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [changed]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {isEditOpen ? (
            <EditApplicationDetails
              application={datas}
              user={user}
              changed={changed}
              setChanged={setChanged}
              isEditOpen={isEditOpen}
              setEditOpen={setEditOpen}
            />
          ) : (
            <ApplicationDetails
              application={datas}
              user={user}
              changed={changed}
              setChanged={setChanged}
              isEditOpen={isEditOpen}
              setEditOpen={setEditOpen}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ApplicationClient;
