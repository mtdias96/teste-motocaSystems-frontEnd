import { useEffect } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProduct } from '../../app/hooks/useProduct'
import { Header } from '../components/Header'
import { CardProduct } from './components/CardProduct'
export function ProductList() {
  const { productDate, refreshProducts } = useProduct();

  useEffect(() => {
    refreshProducts();
  }, [refreshProducts])

  return (
    <>
      <Header />
      <section className='px-[52px] h-full'>
        <div className='w-max-[1409px]'>
          <div className='flex items-center justify-between  mt-16 border-b border-gray1 pb-[18px]'>

            <h2 className='text-base leading-[37.5px] font-semibold text-white2'>Tabela de motos</h2>

            <div className="flex gap-4">
              <div className="relative flex items-center gap-8 w-[385px]">
              <FaSearch
                  alt="pesquisar"
                  className="absolute left-3 w-[14px] h-[14px] text-gray1" />
                <input
                  className="w-full h-11 pl-10 pr-4 py-4 border border-gray1 rounded-[5px] outline-none bg-transparent text-[11px]"
                  type="text"
                  placeholder="Buscar por código, nome e cor" />
              </div>

              <Link to='/novoregistro'
                className='bg-blue1 w-36 uppercase rounded-[5px] text-white1 font-semibold text-[12px] flex justify-center items-center gap-2 transition-opacity duration-300 ease-in-out hover:opacity-90 ' type='button'>
                <FaPlus />
                novo registro
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-[25px] flex flex-col gap-[23px]'>
          {Array.isArray(productDate) && productDate.length > 0 ? (
            productDate.map((product) => (
              <CardProduct
                id={product.id}
                modelo={product.modelo}
                value={product.value}
                color={product.color}
                status={product.status}
                key={product.id}
              />
            ))
          ) : (
            <p className='text-center text-white1 mt-4'>Nenhum produto encontrado.</p>
          )}
        </div>
      </section>

    </>
  )
}
