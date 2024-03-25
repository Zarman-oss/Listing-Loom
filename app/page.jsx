import MainLayout from './layout';
export default function page() {
  return (
    <MainLayout>
      <div className='min-h-screen flex justify-center items-center'>
        <h1 className='text-3xl font-bold '>Welcome to the Page</h1>
      </div>
    </MainLayout>
  );
}
