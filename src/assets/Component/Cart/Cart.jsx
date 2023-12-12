
import PropTypes from 'prop-types';


const Cart = ({ details, remain,time,price}) => {


    return (


        <div style={{maxHeight:'520px'}}  className=" mt-5 md:w-1/2 lg:w-1/4 m-2 card rounded-xl  md:m-5 bg-white p-5 shadow-2xl border-t-4 border-[gray]">

            <h1 className="text-base text-[#2F80ED] font-bold pb-3 ">Credit Hour Remaining {remain}  hr</h1>

          


            <h1 className="text-2xl font-extrabold  pt-6 pb-6 border-t-2 border-[gray]">Courses Name </h1>

          <div className='pb-4'>
                <ol className='list-decimal  px-8 lg:px-3'>
                 
                  {
                    
                      
                    details.map((detail,idx) => <li className='p-2 text-base font-extrabold ' key={idx}>{detail}</li>)
                  
        
                   }
               </ol>
          </div>

            <h1 className="text-base font-bold border-b-2 border-t-2 pt-4 pb-4 border-[gray]">Total Credit Hour : {time} </h1>

            <h1 className="text-base py-3 font-bold  ">Total Price : {price} usd</h1>

        </div>

    );
};


Cart.propTypes = {

    details: PropTypes.array,
    remain: PropTypes.number,
    time : PropTypes.number,
    price: PropTypes.number

}

export default Cart;