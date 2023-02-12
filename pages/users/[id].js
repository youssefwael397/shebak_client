import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// import { newDataSet } from '../../lib/warnings';

export default function Warnings() {
//   const router = useRouter()
//   const { id } = router.query;
//   const [warning, setWarning] = useState(null)

//   useEffect(() => {
//     newDataSet.length && newDataSet.map(warn => warn.id == id && setWarning(warn))
//   }, [])

  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>

      {/* {
        warning && <>
          <p>{warning.id}</p>
          <div className='text-gray-400'>
            {warning?.status}
          </div>


          <div className='text-justify my-8'>
            <video width="320" height="240" controls>
              <source src={`/${warning?.video_name}`} type="video/mp4" />
            </video>
          </div>

          <div className="text-gray-400">
            {warning?.date}
          </div>
        </>
      } */}
    </div>
  );
}