import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
  QuestionMarkCircleIcon,
  BuildingOfficeIcon,
  ArrowPathRoundedSquareIcon,
  HomeIcon,
  ShoppingBagIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/solid";
import {
  TruckIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function App() {
  return (
    <div className="App">
      <header className="w-full fixed top-0 z-10">
        <div className="h-10 bg-red-700 text-white flex justify-between items-center text-sm px-2">
          <a href="#">{`TROCA NA LOJA E NO SITE >`}</a>
          <div className="flex text-xs gap-3">
            <a href="#" className="flex items-center gap-1">
              <QuestionMarkCircleIcon className="h-5" />
              <span>Atendimento</span>
            </a>

            <a href="#" className="flex items-center gap-1">
              <BuildingOfficeIcon className="h-5" />
              <span>Soluções para empresas</span>
            </a>
          </div>
        </div>
        <div className="bg-red-600 flex items-center justify-between px-[4%] py-6">
          <div>
            <img
              src="src/assets/images/logo-centouro.svg"
              alt="logo centauro"
              className="w-44"
            />
          </div>
          <div className="flex bg-white h-10 p-1 rounded gap-2 flex-grow mx-8 max-w-4xl">
            <button>
              <MagnifyingGlassIcon className="text-gray-400 h-5 w-5" />
            </button>
            <input
              className="outline-none w-full"
              type="text"
              placeholder="O que você procura? :)"
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <UserCircleIcon className="h-9 text-white" />
              <div className="text-white text-sm">
                <a href="#" className="font-semibold block">
                  Entre ou Cadastre-se
                </a>
                <a href="#">Meus pedidos</a>
              </div>
            </div>
            <a href="#">
              <HeartIcon className="text-white h-8" />
            </a>
            <a href="#">
              <ShoppingCartIcon className="text-white h-8" />
            </a>
          </div>
        </div>
        <nav className="categorias bg-white border-b border-gray-400 overflow-x-auto">
          <div className="flex items-center justify-start h-12 text-xs font-semibold max-w-6xl m-auto lg:justify-center">
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              ESPORTES
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              HOMENS
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              MULHERES
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              CRIANÇAS
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              CALÇADOS
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              ROUPAS
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              ACESSÓRIOS
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              EQUIPAMENTOS
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              MARCAS
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              BICICLETA
            </a>
            <a
              href="#"
              className="text-gray-500 h-full flex items-center px-2 hover:text-red-600"
            >
              FUTEBOL
            </a>
            <a
              href="#"
              className="text-red-600 h-full flex items-center px-2 hover:bg-neutral-200 hover:text-neutral-500"
            >
              OUTLET
            </a>
            <a
              href="#"
              className="bg-red-600 text-white h-full flex items-center px-2 hover:bg-red-300"
            >
              CUPONS
            </a>
          </div>
        </nav>
      </header>
      <main className="mt-44">
        <div className="grid grid-cols-[1.25fr_1fr] gap-x-10 px-[4%] xl:px-[16%]">
          <div className="h-16 bg-white col-start-1 col-end-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TruckIcon className="h-8" />
              <span className="font-bold text-xl">Frete Grátis</span>
            </div>
            <div className="flex">
              <div className="border-r border-black pr-6">
                <div className="font-bold text-sm">A partir de R$ 149,99</div>
                <div className="text-xs">Condições especiais via app</div>
              </div>
              <div className="pl-6">
                <div className="font-bold text-sm">Retire grátis na loja</div>
                <div className="text-xs">Sem valor mínimo</div>
              </div>
            </div>
            <div>
              <a className="text-gray-400 underline text-xs" href="#">
                Regras e exções
              </a>
            </div>
          </div>
          <div className="h-20 bg-white col-start-1 col-end-3 flex items-center">
            <div className="text-neutral-400 text-sm">
              <a href="#" className="hover:underline">
                Vestuário{" "}
              </a>
              /
              <a href="#" className="hover:underline">
                {" "}
                camiseta{" "}
              </a>
              /
              <a href="#" className="hover:underline">
                {" "}
                masculino
              </a>
            </div>
          </div>
          <div className="bg-white w-full">
            <div className="grid grid-cols-2 gap-4 border-dotted border-b-2 border-gray-400 pb-8 mb-24">
              <div className="w-full h-[600px] bg-gray-200 border border-gray-300 rounded-sm col-start-1 col-end-3"></div>
              <div className="w-full h-[300px] bg-gray-200 border border-gray-300 rounded-sm"></div>
              <div className="w-full h-[300px] bg-gray-200 border border-gray-300 rounded-sm"></div>
              <div className="h-16 col-start-1 col-end-3 bg-slate-200">
                <div className="bg-neutral-700 w-[calc(50%-0.5rem)] h-full flex items-center justify-center">
                  <h4 className="text-white text-sm px-2">
                    INFORMAÇÕES DO PRODUTO
                  </h4>
                </div>
              </div>
              <div className="col-start-1 col-end-3 text-neutral-700">
                <h5 className="font-bold text-2xl">
                  Camiseta Original Sport Club - Masculina
                </h5>
                <p className="mb-4">
                  A MELHOR CAMISETA DO MERCADO PARAO O SEU DIA A DIA.
                </p>
                <p className="leading-5 mb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  cum facere odit eos quisquam eveniet possimus, quis provident?
                </p>
                <p>Benefícios</p>
                <p className="mb-4 leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque laboriosam. <br /> Dolore nam, repellendus libero
                  harum ipsam?
                </p>
                <p>Detalhes do produto</p>
                <p className="mb-4 leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Illum eveniet sit quaerat fugiat illo voluptate consequuntur
                  exercitationem provident. <br />
                  Quae sint iusto consequuntur repellat amet magnam
                </p>
                <p>O modelo usa tamanho M e mede 1,87m</p>
              </div>
            </div>
            <div className="mb-24">
              <h3 className="mb-6 font-bold text-2xl">
                O que os clientes mais compram após ver este item
              </h3>
              <div className="grid grid-cols-[auto_1fr_auto] items-center">
                <ChevronLeftIcon className="h-8 text-neutral-300" />
                <ul className="grid grid-cols-4 gap-0.5">
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Camiseta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 129,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 99,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Tênis Preto
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 399,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 329,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>4x</strong> de <strong>70,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Bermuda Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 229,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 149,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>2x</strong> de <strong>75,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Jaqueta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 99,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 74,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                </ul>
                <ChevronRightIcon className="h-8 text-neutral-300" />
              </div>
            </div>
            <div className="mb-24">
              <h3 className="mb-6 font-bold text-2xl">
                O que os clientes mais compram após ver este item
              </h3>
              <div className="grid grid-cols-[auto_1fr_auto] items-center">
                <ChevronLeftIcon className="h-8 text-neutral-300" />
                <ul className="grid grid-cols-4 gap-0.5">
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Camiseta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 129,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 99,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Tênis Preto
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 399,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 329,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>4x</strong> de <strong>70,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Bermuda Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 229,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 149,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>2x</strong> de <strong>75,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Jaqueta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 99,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 74,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                </ul>
                <ChevronRightIcon className="h-8 text-neutral-300" />
              </div>
            </div>
            <div className="mb-24">
              <h3 className="mb-6 font-bold text-2xl">
                O que os clientes mais compram após ver este item
              </h3>
              <div className="grid grid-cols-[auto_1fr_auto] items-center">
                <ChevronLeftIcon className="h-8 text-neutral-300" />
                <ul className="grid grid-cols-4 gap-0.5">
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Camiseta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 129,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 99,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Tênis Preto
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 399,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 329,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>4x</strong> de <strong>70,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Bermuda Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 229,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 149,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>2x</strong> de <strong>75,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Jaqueta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 99,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 74,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                </ul>
                <ChevronRightIcon className="h-8 text-neutral-300" />
              </div>
            </div>
            <div className="mb-24">
              <h3 className="mb-6 font-bold text-2xl">
                O que os clientes mais compram após ver este item
              </h3>
              <div className="grid grid-cols-[auto_1fr_auto] items-center">
                <ChevronLeftIcon className="h-8 text-neutral-300" />
                <ul className="grid grid-cols-4 gap-0.5">
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Camiseta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 129,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 99,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Tênis Preto
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 399,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 329,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>4x</strong> de <strong>70,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Bermuda Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 229,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 149,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>2x</strong> de <strong>75,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Jaqueta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 99,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 74,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                </ul>
                <ChevronRightIcon className="h-8 text-neutral-300" />
              </div>
            </div>
            <div className="mb-24">
              <h3 className="mb-6 font-bold text-2xl">
                O que os clientes mais compram após ver este item
              </h3>
              <div className="grid grid-cols-[auto_1fr_auto] items-center">
                <ChevronLeftIcon className="h-8 text-neutral-300" />
                <ul className="grid grid-cols-4 gap-0.5">
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Camiseta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 129,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 99,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Tênis Preto
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 399,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 329,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>4x</strong> de <strong>70,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Bermuda Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 229,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 149,99
                        </span>
                        <span className="inline-block text-xs text-neutral-500">
                          ou <strong>2x</strong> de <strong>75,00</strong> sem
                          juros
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                  <li className="bg-white cursor-pointer rounded hover:shadow-md relative p-2">
                    <span className="border border-red-800 text-red-800 text-xs rounded-sm px-2 absolute top-0 right-0 flex items-center font-semibold">
                      50%
                    </span>
                    <div className="bg-gray-200 h-36 mb-4"></div>
                    <div>
                      <div className="text-neutral-500 text-sm">
                        Jaqueta Preta
                      </div>
                      <div>
                        <span className="text-xs text-neutral-500 line-through pr-1">
                          R$ 99,99
                        </span>
                        <span className="inline-block font-bold text-neutral-600">
                          R$ 74,99
                        </span>
                      </div>
                      <div className="h-4 bg-neutral-200 my-2"></div>
                      <span className="text-xs text-neutral-600 pb-0.5 px-1 border border-neutral-600 rounded-2xl">
                        X cores
                      </span>
                    </div>
                  </li>
                </ul>
                <ChevronRightIcon className="h-8 text-neutral-300" />
              </div>
            </div>
          </div>
          <div className=" pb-40 w-full">
            <h1 className="text-neutral-500 font-semibold text-2xl mb-4">
              Camiseta Original Sport Club - Masculina
            </h1>
            <div className="text-sm text-neutral-400 mb-6">REF.: C0SC14M</div>
            <div className="sticky top-48">
              <div>
                <div className="text-sm text-neutral-500 line-through font-semibold">
                  R$119,99
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-red-600 font-semibold text-4xl mb-1">
                    R$59,99
                  </div>
                  <div className="border border-red-600 rounded px-4 py-1 text-red-600 font-semibold">
                    50%
                  </div>
                </div>
              </div>
              <div>
                <div className="text-neutral-400 text-sm mb-1">
                  Vendido e entregue por:
                </div>
                <div className="text-neutral-500 underline text-sm mb-3">
                  Naique.com.br
                </div>
              </div>
              <div className="mb-8">
                <div className="text-neutral-500 text-sm mb-1">COR: branco</div>
                <div className="flex gap-2">
                  <div className="bg-white h-16 w-16 border border-gray-400 hover:border-black"></div>
                  <div className="bg-white h-16 w-16 border border-gray-400 hover:border-black"></div>
                </div>
              </div>
              <div>
                <div className="text-sm text-neutral-500 mb-1">TAMANHO</div>
                <div className="mb-3">
                  <ul className="flex gap-1">
                    <li className="bg-white border border-gray-200 py-0.5 w-14 flex items-center justify-center text-neutral-500 hover:border-black cursor-pointer text-sm">
                      PP
                    </li>
                    <li className="bg-white border border-gray-200 py-0.5 w-14 flex items-center justify-center text-neutral-500 hover:border-black cursor-pointer text-sm">
                      P
                    </li>
                    <li className="bg-white border border-gray-200 py-0.5 w-14 flex items-center justify-center text-neutral-500 hover:border-black cursor-pointer text-sm">
                      M
                    </li>
                    <li className="bg-white border border-gray-200 py-0.5 w-14 flex items-center justify-center text-neutral-500 hover:border-black cursor-pointer text-sm">
                      G
                    </li>
                    <li className="bg-white border border-gray-200 py-0.5 w-14 flex items-center justify-center text-neutral-500 hover:border-black cursor-pointer text-sm">
                      GG
                    </li>
                    <li className="bg-white border border-gray-200 py-0.5 w-14 flex items-center justify-center text-neutral-500 hover:border-black cursor-pointer text-sm">
                      XG
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center gap-6 mb-6">
                <a href="#" className="text-neutral-500 underline text-sm">
                  DESCUBRA SEU TAMANHO
                </a>
                <a href="#" className="text-neutral-500 underline text-sm">
                  TABELA DE MEDIDAS
                </a>
              </div>
              <div className="flex items-center mb-6">
                <ArrowPathRoundedSquareIcon className="h-5 w-5 text-red-600 inline-block mr-1" />
                <div className="text-neutral-500 text-sm">
                  TROCA OU DEVOLUÇÃO GRÁTIS
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <button className="bg-lime-600 text-white py-2 font-semibold text-lg hover:bg-lime-500">
                  COMPRAR
                </button>
                <div className="flex gap-2">
                  <button className="border border-gray-600 py-2 px-4 hover:border-green-500 hover:text-green-500 w-full text-sm text-neutral-500 flex items-center">
                    <ShoppingCartIcon className="h-8" />
                    <div className="text-left pl-4">ADICIONAR AO CARRINHO</div>
                  </button>
                  <button className="border border-gray-600 py-2 px-4 hover:border-red-600 hover:text-red-600 w-full text-sm text-neutral-500 flex items-center">
                    <HeartIcon className="h-8" />
                    <div className="text-left pl-4 grow">
                      ADICIONAR AOS FAVORITOS
                    </div>
                  </button>
                </div>
                <button className="border border-gray-600 py-1 hover:border-green-500 hover:text-green-500 text-sm text-neutral-500">
                  COMPARTILHAR POR WHATSWAPP
                </button>
              </div>
              <div className="flex gap-2 items-center mb-4">
                <HomeIcon className="h-6 text-red-600" />
                <span className="text-xs font-semibold text-neutral-500">
                  RECEBA EM CASA
                </span>
                <span className="text-xs text-neutral-500 px-2">ou</span>
                <ShoppingBagIcon className="h-6 text-red-600" />
                <span className="text-xs font-semibold text-neutral-500">
                  RETIRE EM GRÁTIS NA LOJA
                </span>
              </div>
              <div>
                <form className="mb-4">
                  <label
                    htmlFor=""
                    className="block text-neutral-500 text-xs mb-2"
                  >
                    Informe seu CEP para simular os prazos de entrega
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border text-sm p-2 w-1/2"
                  />
                  <input
                    type="submit"
                    value="CALCULAR"
                    className="border border-neutral-700 bg-neutral-700 text-white text-xs p-2 mr-4"
                  />
                  <span className="text-xs text-neutral-500 underline inline-block ">
                    não sei meu CEP
                  </span>
                </form>
              </div>
              <div className="border border-lime-500 text-lime-500 text-center text-sm">
                DISPONIBILIDADE: PRONTA ENTREGA
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-3">
            <div className="mb-10 flex border-b border-neutral-300 w-fit">
              <h2 className="py-2 mr-8 mb-[-1px] border-b-2 border-neutral-950 text-xl text-neutral-950 cursor-pointer">
                Avaliações e Comentários
              </h2>
              <h2 className="py-2 mb-[-1px] text-xl text-neutral-600 cursor-pointer">
                Perguntas e Respostas
              </h2>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-8 mb-10">
              <div>
                <h4 className="font-bold text-neutral-500 text-lg mb-3">
                  Bem legal
                </h4>
                <div className="h-7 w-40 bg-gray-500 mb-3"></div>
                <div className="text-neutral-500 text-xs">
                  <strong className="text-base">4,9</strong> / 5
                </div>
              </div>
              <div>
                <h4 className="font-bold text-neutral-500 text-lg mb-3">
                  Porque nossos clientes recomendam:
                </h4>
                <ul className="flex flex-wrap gap-2 max-w-md">
                  <li className="bg-neutral-100 py-2 px-4 rounded-3xl text-neutral-500">
                    Acima da média
                  </li>
                  <li className="bg-neutral-100 py-2 px-4 rounded-3xl text-neutral-500">
                    Agrada aos mais diversos gostos
                  </li>
                  <li className="bg-neutral-100 py-2 px-4 rounded-3xl text-neutral-500">
                    Atende a todas as necessidades do dia a dia
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-neutral-500 text-lg mb-3">
                  {"Já tem? Avalie :)"}
                </h4>
                <button className="text-red-500 font-semibold border border-red-500 rounded py-3 px-20 hover:bg-red-500 hover:text-white duration-75">
                  QUERO AVALIAR
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-10">
                <div className="text-neutral-500">
                  <strong className="text-red-500">13</strong> avaliaram este
                  produto
                </div>
                <div>
                  <label className="text-neutral-500">Ordenar por: </label>
                  <select id="" className="text-red-500 outline-none">
                    <option value="">Relevância</option>
                    <option value="">Recentes</option>
                    <option value="">Antigas</option>
                    <option value="">Positivas</option>
                    <option value="">Negativas</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mb-20">
                <ul className="avaliacoes">
                  <li className="flex gap-12 mb-16 pb-14">
                    <div className="w-min w-">
                      <div className="h-24 w-24 bg-gray-200 rounded-full mb-2"></div>
                      <div className="font-bold text-neutral-600 text-sm">
                        Ronaldinho Gaúcho
                      </div>
                    </div>
                    <div>
                      <div className="bg-neutral-500 h-4 w-28 mb-3"></div>
                      <div className="flex gap-6 items-baseline mb-3">
                        <span>
                          <h6 className="inline-block text-neutral-500 font-bold">
                            Incrível
                          </h6>
                        </span>
                        <span className="text-sm text-neutral-500">
                          24/11/2022
                        </span>
                        <span className="text-sm text-emerald-500">
                          Compra verificada
                        </span>
                      </div>
                      <div>
                        <ul className="flex gap-4 flex-wrap mb-5">
                          <li className="bg-neutral-100 py-2 px-4 rounded-3xl text-neutral-500">
                            Acima da média
                          </li>
                          <li className="bg-neutral-100 py-2 px-4 rounded-3xl text-neutral-500">
                            Atende a todas as necessidades do dia a dia
                          </li>
                        </ul>
                      </div>
                      <div className="flex gap-3 mb-5">
                        <button className="flex gap-4 items-center border border-neutral-100 rounded py-4 px-10 hover:border-blue-600 duration-200 group">
                          <HandThumbUpIcon className="h-4 text-neutral-500 group-hover:text-blue-600 duration-200" />
                          <span className="text-sm text-neutral-500 font-semibold group-hover:text-blue-600 duration-200">
                            (3)
                          </span>
                        </button>
                        <button className="flex gap-4 items-center border border-neutral-100 rounded py-4 px-10 hover:border-red-600 duration-200 group">
                          <HandThumbDownIcon className="h-4 text-neutral-500 group-hover:text-red-600 duration-200" />
                          <span className="text-sm text-neutral-500 font-semibold group-hover:text-red-600 duration-200">
                            (0)
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-red-600 font-semibold cursor-pointer">
                        <span>Comentar</span>
                        <ArrowUturnRightIcon className="h-5" />
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-12 pb-14">
                    <div className="w-min w-">
                      <div className="h-24 w-24 bg-gray-200 rounded-full mb-2"></div>
                      <div className="font-bold text-neutral-600 text-sm">
                        Ronaldinho Gaúcho
                      </div>
                    </div>
                    <div>
                      <div className="bg-neutral-500 h-4 w-28 mb-3"></div>
                      <div className="flex gap-6 items-baseline mb-3">
                        <span>
                          <h6 className="inline-block text-neutral-500 font-bold">
                            Incrível
                          </h6>
                        </span>
                        <span className="text-sm text-neutral-500">
                          24/11/2022
                        </span>
                        <span className="text-sm text-emerald-500">
                          Compra verificada
                        </span>
                      </div>
                      <div>
                        <ul className="flex gap-4 flex-wrap mb-5">
                          <li className="bg-neutral-100 py-2 px-4 rounded-3xl text-neutral-500">
                            Acima da média
                          </li>
                          <li className="bg-neutral-100 py-2 px-4 rounded-3xl text-neutral-500">
                            Atende a todas as necessidades do dia a dia
                          </li>
                        </ul>
                      </div>
                      <div className="flex gap-3 mb-5">
                        <button className="flex gap-4 items-center border border-neutral-100 rounded py-4 px-10 hover:border-blue-600 duration-200 group">
                          <HandThumbUpIcon className="h-4 text-neutral-500 group-hover:text-blue-600 duration-200" />
                          <span className="text-sm text-neutral-500 font-semibold group-hover:text-blue-600 duration-200">
                            (3)
                          </span>
                        </button>
                        <button className="flex gap-4 items-center border border-neutral-100 rounded py-4 px-10 hover:border-red-600 duration-200 group">
                          <HandThumbDownIcon className="h-4 text-neutral-500 group-hover:text-red-600 duration-200" />
                          <span className="text-sm text-neutral-500 font-semibold group-hover:text-red-600 duration-200">
                            (0)
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-red-600 font-semibold cursor-pointer">
                        <span>Comentar</span>
                        <ArrowUturnRightIcon className="h-5" />
                      </div>
                    </div>
                  </li>
                </ul>
                <button className="self-center border border-red-600 rounded py-2 w-1/2 font-semibold text-red-600 hover:bg-red-600 hover:text-white duration-300">
                  VEJA MAIS COMENTÁRIOS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-300 px-[4%] lg:px-[8%] xl:px-[16%] pt-3 pb-4">
          <h2 className="font-bold text-2xl text-red-800 mb-2">
            Quer receber ofertas e descontos exclusivos?
          </h2>
          <form className="flex items-center flex-wrap gap-y-4 bg-white rounded shadow-md pt-1 pb-3 px-4">
            <div className="grow flex flex-col gap-1">
              <div className="font-bold text-lg text-neutral-700">
                Cadastre-se aqui e receba 10% de desconto na 1ª compra
              </div>
              <div className="flex">
                <div className="w-full pr-4">
                  <label className="block text-sm text-neutral-600 mb-2">
                    E-mail*
                  </label>
                  <input
                    type="text"
                    id=""
                    className="border border-neutral-300 rounded-3xl py-3 px-4 w-full"
                  />
                </div>
                <div className="w-full pr-4">
                  <label className="block text-sm text-neutral-600 mb-2">
                    Nome*
                  </label>
                  <input
                    type="text"
                    id=""
                    className="border border-neutral-300 rounded-3xl py-3 px-4 w-full"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="font-bold text-neutral-700">
                  Prefere receber ofertas de produtos:
                </div>
                <div className="flex gap-10">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name=""
                      id=""
                      className="cursor-pointer"
                    />
                    <label className=" text-neutral-600">Feminino</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name=""
                      id=""
                      className="cursor-pointer"
                    />
                    <label className=" text-neutral-600">Feminino</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-min">
              <input
                type="submit"
                value="Aceitar e me cadastrar"
                className="whitespace-pre bg-red-600 text-white font-semibold px-6 py-3 rounded cursor-pointer hover:bg-red-500 mb-4"
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="" className="cursor-pointer" />
                <span className="text-sm text-neutral-600">
                  Li e concordo com os{" "}
                  <a href="#" className="underline whitespace-pre">
                    Termos de Consentimento
                  </a>
                  .*
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <div className="px-[4%] xl:px-[16%] pt-10">
          <div className="flex flex-wrap gap-10 justify-between  mb-16">
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <h5 className="text-base text-red-600">FALE CONOSCO</h5>
              <li>Acompanhe seu Pedido</li>
              <li>Televendas (11) 4004 6006</li>
              <li>Atendimento</li>
              <li>Enviar E-mail</li>
              <li>Soluções para Empresas</li>
            </ul>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <h5 className="text-base text-red-600">AJUDA E SUPORTE</h5>
              <li>Regulamentos</li>
              <li>Política de Privacidade</li>
              <li>Política de Cookies</li>
              <li>Políticas de Trocas de Arrependimento</li>
              <li>Perguntas Frequentes</li>
              <li>Termos e Condições</li>
              <li>Segurança</li>
              <li>Fornecedores</li>
              <li>Serviços</li>
            </ul>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <h5 className="text-base text-red-600">INSTITUCIONAL</h5>
              <li>Relação com Investidores</li>
              <li>Assesssoria de Imprensa</li>
              <li>Trabalhe Conosco</li>
              <li>Marketplace</li>
              <li>Catálogo de Produtos</li>
              <li>Eventos</li>
              <li>Cupons de desconto</li>
            </ul>
            <ul className="flex flex-col gap-2 text-sm text-neutral-500">
              <h5 className="text-base text-red-600">NOSSAS LOJAS</h5>
              <li>Encontre uma Centauro próxima a você</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-x-20 gap-y-10 mb-12">
            <div className="grow">
              <h6 className="text-sm text-neutral-500 mb-1">
                Formas de pagamento
              </h6>
              <ul className="flex gap-2">
                <li className="bg-gray-300 h-7 w-11 rounded-sm"></li>
                <li className="bg-gray-300 h-7 w-11 rounded-sm"></li>
                <li className="bg-gray-300 h-7 w-11 rounded-sm"></li>
                <li className="bg-gray-300 h-7 w-11 rounded-sm"></li>
                <li className="bg-gray-300 h-7 w-11 rounded-sm"></li>
                <li className="bg-gray-300 h-7 w-11 rounded-sm"></li>
                <li className="bg-gray-300 h-7 w-11 rounded-sm"></li>
              </ul>
            </div>
            <div>
              <h6 className="text-sm text-neutral-500 mb-1">
                Baixe o app Centauro
              </h6>
              <ul className="flex gap-4">
                <a href="#">
                  <li className="bg-black h-10 w-32 rounded"></li>
                </a>
                <a href="#">
                  <li className="bg-black h-10 w-32 rounded"></li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-red-600 px-[12%] xl:px-[24%] pt-10 pb-5">
          <div className="flex gap-7 justify-center mb-10">
            <img
              src="src/assets/images/logo-centouro.svg"
              alt=""
              className="w-44"
            />
            <a href="#">
              <div className="bg-rose-950 rounded-full h-12 w-12 ring-1 ring-rose-950 border-[3px] border-rose-700"></div>
            </a>
            <a href="#">
              <div className="bg-rose-950 rounded-full h-12 w-12 ring-1 ring-rose-950 border-[3px] border-rose-700"></div>
            </a>
            <a href="#">
              <div className="bg-rose-950 rounded-full h-12 w-12 ring-1 ring-rose-950 border-[3px] border-rose-700"></div>
            </a>
          </div>
          <div>
            <p className="text-sm text-white text-center mb-4">
              Os preços, promoções, condições de pagamento, frete e produtos são
              válidos exclusivamente para compras realizadas via internet. Fotos
              meramente ilustrativas. Copyright © - Centauro.com.br. Todos os
              direitos reservados.
            </p>
          </div>
          <div>
            <p className="text-sm text-white text-center">
              SBF COMERCIO DE PRODUTOS ESPORTIVOS S.A. CNPJ: 06.347.409/0069-53
              Endereço: Rua Hugo D'Antola, nº 200, Lapa, Cidade de São Paulo -
              SP, CEP 05038-090.
            </p>
          </div>
          <div>
            <a href="#" className="text-sm text-white text-center block">
              sac@centauro.com.br
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
