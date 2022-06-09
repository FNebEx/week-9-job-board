function Jobs({ jobs }) {
  if(!jobs) return null;
  
  return (
    <>
      {jobs.map((job, index) => (
        <p key={ index }>{ job.title }</p>
      ))}
    </>
  );
}

export default Jobs;