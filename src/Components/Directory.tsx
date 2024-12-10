import React, { useState } from 'react';
import './Directory.scss';

const Directory = ({ files }) => {
    const [active, setActive] = useState(false)
    const [activeModal, setActiveModal] = useState(false)

    const activeState = () => {
        setActive(!active)
        setActiveModal(!activeModal);

    }

    const takeAction = () => {
        setActiveModal(!activeModal);


    }

    if (files.type === 'file') {
        return (
            <>
                <button className="btn file" data-collapsed={active} onClick={takeAction}>

                <svg className='icon' width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 11V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H15M21 11L15 5M21 11H16.6C16.0399 11 15.7599 11 15.546 10.891C15.3578 10.7951 15.2049 10.6422 15.109 10.454C15 10.2401 15 9.96005 15 9.4V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    {files.name}</button>
                    {activeModal && (
                        <div className={`${activeModal ? 'show' : ''} modal`}>
                            modal
                        </div>
                    )}
            </>
        )
    }


    return (
        <div className='root' data-collapsed={active}>
            <button onClick={() => activeState()} className={`btn folder ${active ? 'active' : ''}`}>
                <svg className='icon' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11L2 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M22 11.7979C22 9.16554 22 7.84935 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975M21.9913 16C21.9554 18.4796 21.7715 19.8853 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>{files.name}
            </button>
            {files.data.map(items => <Directory key={items.type + items.name} files={items} />)}
        </div>
    )
}

export default Directory;
