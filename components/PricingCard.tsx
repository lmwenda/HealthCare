import { NextComponentType } from 'next';
import React from 'react'

const PricingCard: NextComponentType = () => {
  return (
    <>
      <section>
        <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div>
            <div className="relative p-10 space-y-12 overflow-hidden lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 rounded-xl">
              <div className="relative flex flex-col p-8 bg-white">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-neutral-600">Membership</h3>
                  <p className="flex items-baseline mt-4 text-neutral-600">
                    <span className="text-5xl font-extrabold tracking-tight">£4.16</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </p>
                  <p className="mt-6 text-gray-500">The Essientials everyone needs</p>
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-neutral-600">What's included?</span>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">Compare Progression</span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">Fun Healthy Games</span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">Professional Videos</span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">Community Interaction</span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-blue-600 rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-neutral-600">Dark Mode</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 rounded-lg">
                  <a href="#" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get Started </a>
                </div>
              </div>
              <div className="relative flex flex-col p-8 bg-blue-600 rounded-2xl">
                <div className="relative flex-1">
                  <h3 className="text-xl font-semibold text-white">Premium</h3>
                  <p className="flex items-baseline mt-4 text-white">
                    <span className="text-5xl font-extrabold tracking-tight">£9.99</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </p>
                  <p className="mt-6 text-white text-solitud">Become more than just "Healthy"</p>
                  <ul role="list" className="pt-6 mt-6 space-y-6 border-t">
                    <span className="text-lg font-semibold text-white">What's included?</span>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">Unlimited Videos</span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">Offline Mode</span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">Messaging and Call</span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">Competition Mode</span>
                    </li>

                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">Includes Membership</span>
                    </li>
                    <li className="flex">
                      <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                        <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="ml-3 text-white">View your progression</span>
                    </li>
                  </ul>
                </div>
                <div className="z-50 mt-6 rounded-lg">
                  <a href="/pricing" type="highlight" className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"> Get started </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  )
}

export default PricingCard;