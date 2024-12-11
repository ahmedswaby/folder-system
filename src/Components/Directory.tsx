import React, { useState } from 'react';
import './Directory.scss';
import { File , Copy , Delete , Rename , Folder} from '../Assets/icons';
const Directory = ({ files }) => {
    const [active, setActive] = useState(false)
    const [activeActions, setActiveAction] = useState(false)

    const activeState = () => {
        setActive(!active)
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        setActiveAction(!activeActions)
    }

    if (files.type === 'file') {
        return (
            <>
                <div className="btn file" data-collapsed={active}>
                    <button className='btn' onContextMenu={(e) => handleRightClick(e)}>
                        <File />
                        {files.name}
                    </button>
                    {activeActions && (
                        <div className="action_wrapper">
                            <button className="btn" onClick={() => alert('copied success!')}>
                                <Copy />
                            </button>
                            <button className="btn" onClick={() => alert('deleted success!')}>
                                <Delete />
                            </button>
                            <button className="btn" onClick={() => alert('renamed success!')}>
                                <Rename />
                            </button>
                        </div>
                    )}
                    
                    </div>
            </>
        )
    }


    return (
        <div className='root' data-collapsed={active}>
            <button onClick={() => activeState()} className={`btn folder ${active ? 'active' : ''}`}>
                <Folder />
                {files.name}
            </button>
            {files.data.map(items => <Directory key={items.type + items.name} files={items} />)}
        </div>
    )
}

export default Directory;
