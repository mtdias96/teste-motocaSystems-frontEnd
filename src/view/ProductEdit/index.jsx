import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useProductEditController } from "./useProductEditController";


export function ProductEdit() {
  const {id} = useParams()
  const { handleSubmit, register } = useProductEditController(id)

  return (
    <>
      <Header />
      <section className='px-[52px] pb-8 '>
        <div className='w-max-[1409px]'>
          <div className='flex items-center justify-between  border-b border-gray1 pb-[18px]'>
            <h2 className='text-base leading-[37.5px] font-semibold text-white2'>Editar</h2>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <h2 className="mt-[73px] font-semibold text-white2 text-[25px]">Edite as informações que preferir! 📝</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex justify-center mt-8 relative flex-col items-center gap-9">
          <Input
            type="text"
            {...register('id')}
            label='Código'
            className='text-gray-400 border-gray-500'
            disabled

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
                className="px-4 py-3 outline-none border border-gray1 rounded bg-inherit text-white w-[409px]">
                <option className="text-white bg-purple">Em estoque</option>
                <option className="text-white bg-purple">Sem estoque</option>
                <option className="text-white bg-purple">Em trânsito</option>
              </select>

              <span className="absolute left-0 top-3 px-[15px] ml-2 text-[13px] font-medium leading-[19.5px] pointer-events-none -translate-y-5 bg-purple text-white1">Status</span>
            </label>
          </div>

          <button type="submit" className="bg-blue1 uppercase flex text-white w-[409px] h-[45px] justify-center items-center gap-2 font-semibold text-[12px] rounded-[5px] ransition-opacity duration-300 ease-in-out hover:opacity-85">
            <FaPlus className="w-[12px] h-[12px]" />
            registrar
          </button>
        </form>
      </section>
    </>
  )
}
