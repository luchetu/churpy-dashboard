
import art1 from './assets/Artboard – 7.svg';
import art2 from './assets/Artboard – 1.svg';
import art3 from './assets/Artboard – 2.svg';
import art4 from './assets/Artboard – 3.svg';
import art10 from './assets/Artboard – 10.svg';
import art5 from './assets/Artboard – 4.svg';
import art6 from './assets/Artboard – 5.svg';
import art7 from './assets/Artboard – 6.svg';
import Header from './components/Header';

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* Hero section */}
        <div className="relative pb-16">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative sm:rounded-2xl sm:overflow-hidden sm:grid grid-cols-12">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gray-100" />
              </div>
              <div className="sm:col-span-7">
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 lg:pb-8 lg:px-8">
                  <h1 className="text-left text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-black">Account Receivables</span>
                    <span className="block text-gray-700">Automation</span>
                  </h1>
                  <p className="mt-6 max-w-lg text-left text-xl text-gray-700 sm:max-w-3xl">
                    Modernising the account receiving operation in africa.
                  </p>
                  <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
                    <div className="sm:inline-grid sm:grid-cols-1 sm:gap-5 relative sm:w-2/3">
                      <input
                        type="email"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        required
                        className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:placeholder-gray-400"
                        placeholder="Enter your email"
                      />
                      <div className="absolute right-1 top-1">
                        <a
                          href="#"
                          className="flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-opacity-70 sm:px-8"
                        >
                          Get Updates
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-5">
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 lg:pb-8 lg:px-8">
                  <div className="max-w-none mx-auto">
                    <div className="bg-white overflow-hidden sm:rounded-lg sm:shadow-xl">
                      <div className="bg-white rounded-lg px-4 py-5 border-b border-gray-200 sm:px-6">
                        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
                          <div className="ml-4 mt-2">
                            <h4 className="text-sm leading-6 font-medium text-gray-900">Reconciled Value</h4>
                            <h3 className="text-lg leading-6 font-bold text-gray-900">$172,190.00</h3>
                          </div>
                          <div className="ml-4 mt-2 flex-shrink-0">
                            <div
                              className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm"
                            >
                              <img className="w-24" src={art1} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="px-2 divide-y divide-gray-200">
                        <li>
                          <ul role="list">

                            <li>
                              <div className="block hover:bg-gray-50">
                                <div className="px-4 py-4 sm:px-4">
                                  <div className="grid grid-cols-12">
                                    <div className="col-span-4 text-sm tracking-tight font-medium text-gray-800 truncate">
                                      Account Recon.
                                    </div>
                                    <div className="col-span-6 flex w-full items-center">
                                      <div className="h-4 w-11/12 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="col-span-2 flex justify-end">
                                      <div className="sm:flex">
                                        <div className="flex items-center text-sm text-gray-500">
                                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                                          </svg>
                                          84%
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="block hover:bg-gray-50">
                                <div className="px-4 py-4 sm:px-4">
                                  <div className="grid grid-cols-12">
                                    <div className="col-span-4 tracking-tight text-sm font-medium text-gray-800 truncate">
                                      Manual
                                    </div>
                                    <div className="col-span-6 flex w-full items-center">
                                      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="col-span-2 flex justify-end">
                                      <div className="sm:flex">
                                        <div className="flex items-center text-sm text-gray-500">
                                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-teal-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                          </svg>
                                          14%
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="block hover:bg-gray-50">
                                <div className="px-4 py-4 sm:px-4">
                                  <div className="grid grid-cols-12">
                                    <div className="col-span-4 tracking-tight text-sm font-medium text-gray-800 truncate">
                                      To Review
                                    </div>
                                    <div className="col-span-6 flex w-full items-center">
                                      <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="col-span-2 flex justify-end">
                                      <div className="sm:flex">
                                        <div className="flex items-center text-sm text-gray-500">
                                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-teal-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                          </svg>
                                          2%
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                          </ul>
                        </li>
                        <li>
                          <div className="px-4 py-4 grid gap-4 grid-cols-8">
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-24 w-full rounded" style={{ background: '#193B59' }}></div>
                            </div>
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-16 w-full rounded" style={{ background: '#50BFA0' }}></div>
                            </div>
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-12 w-full rounded" style={{ background: '#193B59' }}></div>
                            </div>
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-20 w-full rounded" style={{ background: '#50BFA0' }}></div>
                            </div>
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-24 w-full rounded" style={{ background: '#193B59' }}></div>
                            </div>
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-16 w-full rounded" style={{ background: '#50BFA0' }}></div>
                            </div>
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-12 w-full rounded" style={{ background: '#193B59' }}></div>
                            </div>
                            <div className="col-span-1 flex w-full items-end">
                              <div className="h-20 w-full rounded" style={{ background: '#50BFA0' }}></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="max-w-7xl mx-auto py-16 px-4 bg-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight">
            Reconciliation nightmares are <br /> over and gone!
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-500">
            Our Reconciliation Engine offers you a smooth and elegant way to reconcile receivables in realtime by tracking
            multiple channels at the same time.
          </p>
          <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="relative p-8 bg-white border shadow-sm flex flex-col" style={{ background: '#193B59' }}>
              <div className="flex-1">
                <div className="bg-white -mr-10 mt-2 p-4">
                  <h6 className="text-sm font-semibold">Incoming payments</h6>
                  <div className="grid gap-2 grid-cols-12 mt-6">
                    <div className="col-span-2">
                      <img className="w-24 shadow-lg" src={art1} alt="" />
                    </div>
                    <div className="col-span-8">
                      <p className="text-xs">Payment is identified</p>
                      <p className="text-xs font-semibold">04/05/22 | 9122 2829 ****</p>
                    </div>
                  </div>
                  <div className="grid gap-6 grid-cols-12 mt-16">
                    <div className="col-span-5">
                      <img className="w-full shadow-lg" src={art4} alt="" />
                    </div>
                    <div className="col-span-5">
                      <img className="w-full shadow-lg" src={art10} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white pt-20">
                <h4 className="text-lg font-medium">Realtime payment tracking</h4>
                <p className="mt-6 text-sm font-light">
                  Payments are detected as soon as they appear and routed to our A.I Reconciliation Engine.
                  <span className="opacity-0">and routed to our A.I Reconciliation Engine</span>
                </p>
              </div>
            </div>
            <div className="relative p-8 bg-white border shadow-sm flex flex-col" style={{ background: '#F2BF80' }}>
              <div className="flex-1">
                <div className="bg-white -ml-10 mt-2 px-6 py-4">
                  <h6 className="text-sm font-semibold">A.I Engine reconciles to invoice</h6>
                  <div className="grid gap-6 grid-cols-12 mt-3">
                    <div className="col-span-10">
                      <img className="w-full shadow-lg" src={art2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg-white -mr-10 mt-2 p-4">
                  <h6 className="text-sm font-semibold">Realtime updates</h6>
                  <div className="grid gap-6 grid-cols-12 mt-3">
                    <div className="col-span-10">
                      <img className="w-full shadow-lg" src={art3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-900 pt-20">
                <h4 className="text-lg font-medium">Intelligent Link-up</h4>
                <p className="mt-6 text-sm font-light">
                  Churpy identifies matching invoices using A.I technology and updates your data in near realtime effectiveness.
                </p>
              </div>
            </div>
            <div className="relative p-8 bg-white border shadow-sm flex flex-col" style={{ background: '#50BFA0' }}>
              <div className="flex-1">
                <div className="bg-white -mr-10 mt-2 p-4">
                  <h6 className="text-sm font-semibold">Reconciliation reports</h6>
                  <div className="flex space-x-16 flex-wrap mt-2">
                    <div>
                      <img className="w-32 shadow-lg" src={art7} alt="" />
                    </div>
                    <div className="-mt-8">
                      <img className="w-32 shadow-lg" src={art6} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="-mt-4 pr-2">
                      <img className="w-32 shadow-lg" src={art5} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white pt-20">
                <h4 className="text-lg font-medium">Reports & Insights</h4>
                <p className="mt-6 text-sm font-light">
                  We provide transparent detailed reports for various aspects of your data to suite decision making in all levels.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
