import Spinner from '../assets/icons/Spinner.svg'

const Loader = () => {
    return (

        <div style={{ textAlign: 'center', width: '100%' }}>
            <img src={Spinner} alt='Loading ...' />
        </div>

    );
}

export default Loader;