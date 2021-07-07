import logo from '../img/logo.png';

const HeaderTop = () => {


  return (
    <div className='flex items-center justify-center py-2'>
      <a href='#'>
        <img src={logo} className='w-20' />
      </a>
    </div>
  )
}

export default HeaderTop;