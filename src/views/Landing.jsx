import {MdMenu} from 'react-icons/md'

const Landing = (props) => {
    return (
        <>
            <button onClick={props.onOpen}>
                <MdMenu className='h-8' />
            </button>
        </>
    )
}

export default Landing
