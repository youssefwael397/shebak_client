import { getwarningDetails, getwarningIdList } from '../../lib/warnings';

export async function getStaticPaths() {
  const paths = await getwarningIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const warningData = await getwarningDetails(params.id);
  return {
    props: {
      warningData,
    },
  };
}

export default function Warnings({ warningData }) {
  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>

      <div className='text-gray-400'>
        {warningData.stats}
      </div>

      {/* <div className='text-justify my-8'>
        <img src={warningData.image} className="d-flex align-items-center" />
      </div> */}

      <div className='text-justify my-8'>
        <video width="320" height="240" controls>
          <source src={warningData.video} type="video/mp4"/>
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </div>

      <div className="text-gray-400">
        {warningData.date}
      </div>
    </div>
  );
}