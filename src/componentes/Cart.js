import { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { cartContext } from './CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [open, setOpen] = useState(true)
  const { products, quantity, removeItem, clear } = useContext(cartContext)
  return (
    <>  {products.length === 0 ?
      <>  <h1>debes agregar productos <Link to="/">ingresa aqui</Link></h1></> :
      <> {products.map(product => <div key={product.id}>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10 " onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity" />
            </Transition.Child>

            <div className="fixed  overflow-hidden ">

              <div className="fixed  right-0 flex inset-y-0 pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen ">
                    <div className="flex h-full flex-col  overflow-y-scroll bg-white ">
                      <div className="flex-1  overflow-y-auto py-6 px-4 ">
                        <div className="flex  items-start justify-between">
                          <Dialog.Title className="text-lg font-medium  text-gray-900"> Carrito de compras </Dialog.Title>
                          <div className="ml-3  flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8 ">
                          <div className="flow-root ">
                            <ul  className="-my-6 divide-y divide-gray-200 ">
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6 ">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.image}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <p>{product.title}</p>
                                        </h3>
                                        <p className="ml-4">{product.price*quantity}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">{quantity}</p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium  hover:text-emerald-300"
                                          
                                        >
                                          Eliminar
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Total</p>
                          <p>{product.price*quantity}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                    <Link to="/ContainerFinish"><button className=' w-full bg-zinc-600   rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ' >
                          Terminar Compra
                          </button></Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            O {' '}
                            <Link to='/'><button type="button" className="font-medium  hover:text-emerald-300">
                              Continuar comprando<span aria-hidden="true"> &rarr;</span>
                            </button></Link>
                          </p>
                          <button
                            type="button"
                            className="font-medium  hover:text-emerald-300"
                            onClick={clear}
                          >
                            eliminar todo
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>

            </div>
          </ Dialog >
        </Transition.Root>

      </div>)}

      </>}

    </>
  )
}
export default Cart
  /*  total = total + Producto.precio * Producto.cantidad; */