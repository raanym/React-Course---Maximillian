import { ReactComponent as Survey } from '../img/survey.svg';
import { ReactComponent as Complaint } from '../img/complaint.svg';

const MassalaSurvey = () => {


  return (
    <div className='sm:px-52 px-4 font-waheed text-3xl mt-10'>
      <div className='sm:grid sm:grid-cols-2 sm:justify-center sm:items-center sm:gap-2'>
        <a href='#' className='flex items-center bg-yellow-500 h-40 mb-2 sm:mb-0 hover:bg-yellow-400 transition duration-500 ease-in-out'>
          <Complaint className='w-24 ml-2' /> މައްސަލަތަކާއި ރަނގަޅު ކުރަންޖެހޭކަންކަން
        </a>

        <a href='#' className='flex items-center bg-blue-500 h-40 hover:bg-blue-400 transition duration-500 ease-in-out'>
          <Survey className='w-24 ml-2' /> ސާވޭ
        </a>
      </div>

    </div >
  );
}

export default MassalaSurvey;