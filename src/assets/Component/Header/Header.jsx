
import PropTypes from 'prop-types'; 
const Header = ({ToastContainer}) => {
    return (
        <div>
             
             <h1 className='text-center text-2xl md:text-3xl font-extrabold p-10'>Course Registration</h1>

            <ToastContainer/>

        </div>
    );
};

Header.propTypes={

    ToastContainer : PropTypes.object

}

export default Header;