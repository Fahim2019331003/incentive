import ApplyForm from '../components/apply-incentive/ApplyForm';
import FormTitle from '../components/apply-incentive/FormTitle';

const page = () => {
  return (
    <main className="flex min-h-screen flex-col mt-20">
      <FormTitle title={'Incentive Application Form'} />
      <div className="flex justify-center">
        <ApplyForm />
        
      </div>
    </main>
  );
};

export default page;
