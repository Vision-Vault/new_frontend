import { useAuth } from "@/contexts/auth";
const baseUrl = process.env.NEXT_PUBLIC_URL
import 'font-awesome/css/font-awesome.min.css';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


export default function PostDetail({ data, donation }) {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const { user, token } = useAuth()
    const donate = data.funding_goal / data.allowed_donors

    function submithandeler() {
        const dataToSave = {
            "user": user.id,
            "amount": donate
        };
        donation(dataToSave, data.id)
    }

    return (
        <div className='aspost'>
            <h1 className="title"><strong>{data.title}</strong></h1>
            <div className="media">
                <img src="/assests/arch.jpg" alt="Header Image" />

            </div>
            <div className="detail">
                <div>
                    <strong>{data.funding_goal}$</strong>
                    <strong>Allow donars: {data.allowed_donors}</strong>
                </div>
                <div>
                    {data.description}
                </div>
                <div>
                    <button className="donation" onClick={() => (setOpen(true))} >Donate with {donate}</button>
                    <div className="rating">
                        <i className="fas fa-star" style={{ color: '#fedb2a' }}></i>
                        <i className="fas fa-star" style={{ color: '#fedb2a' }}></i>
                        <i className="fas fa-star" style={{ color: '#fedb2a' }}></i>
                        <i className="fas fa-star" style={{ color: '#fedb2a' }}></i>
                        <i class="fa-regular fa-star" style={{ color: '#fedb2a' }} ></i>
                    </div>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Donate On {data.title} Project
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Are you sure you want to donate on this project? This action cannot be undone.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 sm:ml-3 sm:w-auto"
                                            onClick={() => (setOpen(false), submithandeler())}
                                        >
                                            Donate
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}