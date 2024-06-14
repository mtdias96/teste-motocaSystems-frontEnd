import PropTypes from 'prop-types';
import { BiTrashAlt } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

import { cn } from '../../../../app/utils/cn';
import { formatCurrency } from '../../../../app/utils/formatCurrancy';
import { Spinner } from '../../../components/Spinner';
import { useCardProductController } from './useCardProdutController';


export function CardProduct({id, modelo, value, color, status}) {
  const {handleDeleteProduct, isLoading} = useCardProductController()

  const statusClass = cn({
    'bg-green-500/10 text-green-500': status === 'Em estoque',
    'bg-yellow-500/10 text-yellow-500': status === 'Em trânsito',
    'bg-red-500/10 text-red-500': status === 'Sem estoque',
  });


  return (
    <div className="flex items-center justify-between h-[139px] px-14 bg-purple2 rounded-[10px]">
      <div className="flex gap-24 items-center">
        <div className="">
          <h3 className="text-purple3 w-[58px] text-[17px] font-medium leading-[25.5px]">#{id}</h3>
        </div>

        <div className="flex flex-col gap-[10px] w-auto flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-[17px] text-white font-semibold leading-[25.5px] w-auto">
              {modelo}
            </h3>
            <span className={cn("ml-3 text-[15px] font-medium leading-[22.5px] w-28 h-8  bg-green1 text-green-500 flex items-center justify-center rounded-[35px]", statusClass)}>
              {status}
            </span>
          </div>

          <div>
            <p className="text-[15px] font-medium leading-[25.5px] text-white">Valor: {formatCurrency(value)}</p>
          </div>

          <div>
          <p className="text-[15px] font-medium leading-[25.5px] text-white">Cor: <span className='uppercase'>{color}</span></p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
      {isLoading && <Spinner/>}
      {!isLoading && (
      <BiTrashAlt
      onClick={() => handleDeleteProduct(id)}
      className="text-red1 w-5 h-5 cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-60"

      /> )}
      <Link to={`/editarregistro/${id}`}>
      <FiEye
      className="w-5 h-5 text-white transition-opacity duration-300 ease-in-out hover:opacity-60"
      />
      </Link>
      </div>
    </div>
  )
}


CardProduct.propTypes = {
  id: PropTypes.string.isRequired,
   modelo: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
     color: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
}
