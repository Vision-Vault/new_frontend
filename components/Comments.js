
import { useAuth } from "@/contexts/auth"
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Comments({ handel, del, data, getReply }) {
    const dat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { user, token } = useAuth()
    const [visable, setVisable] = useState(false)
    function submithandeler(event) {
        event.preventDefault();
        const dataToSave = {
            "body": event.target.comment.value,
            "project": 1,
            "user": user.id
        };

        handel(dataToSave)
        event.target.reset();
    }


    return (

        <div className='ascomments'>
            <form for="comment" className="create" method="post" onSubmit={submithandeler} >
                <input id="comment" name="comment" placeholder="Write a comment ..." />
                <button type="submit"><i className="material-icons">send</i></button>
            </form>
            <section>
                {dat.map((element) => {
                    return (
                        <div className="oneComment">
                            <div className="profile"><img src="/assests/personal.jpg" /></div>
                            <div className="content">
                                <div className="option">
                                    <strong><h3>username</h3></strong>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50">
                                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95">
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item className="choice" >
                                                        {({ active }) => (
                                                            <a className={
                                                                classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
                                                            }> Edit </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="py-1">
                                                    <Menu.Item className="choice" onClick={()=>del(1,1)} >
                                                        {({ active }) => (
                                                            <a className={
                                                                classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}> Delete </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>

                                </div>
                                here is a comment Description: A building architect is a professional who
                                designs and plans buildings and other structures. They
                                work on the aesthetic, functional, and safety aspects
                                of a construction project.
                                <div className="button">
                                    <button onClick={getReply}  ><strong>Reply</strong></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}