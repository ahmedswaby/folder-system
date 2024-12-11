import React, { useState } from 'react';
import './Directory.scss';
import { File , Copy , Delete , Rename , Folder} from '../Assets/icons';
const Directory = ({ files }) => {
    const [active, setActive] = useState(false)

    const activeState = () => {
        setActive(!active)
      

    }

    if (files.type === 'file') {
        return (
            <>
                <div className="btn file" data-collapsed={active}>
                    <File />
                    {files.name}
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
