import { IoMdHome } from 'react-icons/io'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.png'

export function Header() {
  return (
    <header className="w-full flex items-center justify-end pt-10 pr-11 gap-4">
      <Link to='/'>
        <IoMdHome className='w-[33px] h-[28px] text-gray-400 transition-opacity duration-300 '/>
      </Link>

      <div className='relative'>
        <img className='rounded-full w-11 h-11' src={avatar} alt="perfil" />
        <div className='absolute w-[11px] h-[11px] bottom-0 right-2 rounded-full bg-green-400'></div>
      </div>
    </header>
  )
}
