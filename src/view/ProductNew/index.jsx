import { FaPlus } from "react-icons/fa";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useProductNewController } from "./useProductNewController";

export function ProductNew() {
  const { handleSubmit, register } = useProductNewController()

  return (
    <>
      <Header />
      <section className='px-[52px] pb-8 h-[900px'>
        <div className='w-max-[1409px]'>
          <div className='flex items-center justify-between  border-b border-customGray pb-[18px]'>
            <h2 className='text-base leading-[37.5px] font-semibold text-white2 text-[25px]'>Registro de Motos</h2>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <h2 className="mt-[73px] font-semibold text-white2 text-[25px]">Preencha as informações a baixo para registrar uma Moto 🏍️</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex justify-center mt-8 relative flex-col items-center gap-9">
          <Input
            type="text"
            {...register('id')}
            label='Código'
          />
          <Input
            type="text"
            label='Modelo da Moto'
            {...register('modelo')}

          />
          <Input
            type="text"
            label='Cor'
            {...register('color')}
          />
          <Input
            type="text"
            label="valor"
            {...register('value')}
          />

          <div className="flex items-center justify-center bg-transparent">
            <label className="relative">
              <select
                {...register('status')}
                className="px-4 py-3  outline-none border border-customGray rounded bg-inherit text-white w-[409px] text-[13px]">
                <option className="text-white bg-customPurple">Em estoque</option>
                <option className="text-white bg-customPurple">Sem estoque</option>
                <option className="text-white bg-customPurple">Em trânsito</option>
              </select>

              <span className="absolute left-0 top-3 px-[15px] ml-2 text-[13px] font-medium leading-[19.5px] pointer-events-none -translate-y-5 bg-purple text-white">Status</span>
            </label>
          </div>

          <button type="submit" className="bg-blue1 uppercase flex text-white w-[409px]  h-[45px] justify-center items-center gap-2 font-semibold text-[12px] rounded-[5px] ransition-opacity duration-300 ease-in-out hover:opacity-85">
            <FaPlus className="w-[12px] h-[12px]" />
            registrar
          </button>
        </form>
      </section>
    </>
  )
}
