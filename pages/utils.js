function Utils() {
  const handleCleanDatabase = async () => {
    await fetch('/api/utils', {
      body: JSON.stringify({ task: 'clean_database' }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });
  }

  const handleGenerateUsers = async () => {
    await fetch('/api/utils', {
      body: JSON.stringify({ task: 'generate_users_and_jobs' }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });
  }

  const handleGenerateOneJob = async () => {
    await fetch('/api/utils', {
      body: JSON.stringify({ task: 'generate_one_job' }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    });
  }

  return (
    <div className="mt-10 ml-20">
      <h2 className="mb-10 text-xl">Utils</h2>

      <div className='flex-1 mb-5'>   
        <button 
          className='border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker'
          onClick={handleCleanDatabase}>Clean Database</button>

        <button 
          className='border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker'
          onClick={handleGenerateUsers}>Generate 10 Users and Some Jobs</button>
        
        <button 
          className='border px-8 py-2 mt-5 mr-8 font-bold rounded-full color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker'
          onClick={handleGenerateOneJob}>Generate 1 Job</button>
      </div>
    </div>
  );
}

export default Utils;