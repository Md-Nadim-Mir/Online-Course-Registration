
import PropTypes from 'prop-types';
import { FaDollarSign , FaBookmark} from 'react-icons/fa';

const Course = ({ course ,handleDetails }) => {

    let {id,image,title,info,price,credit}=course;

    // console.log(course);

    return (
        <div>

            {/* card create */}

            <div className="card w-full bg-base-100 shadow-2xl">
                
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
              
                <div className="card-body">
                    
                    <h2 className="card-title text-xl font-extrabold"> {title}
                    </h2>

                    <p className='py-2'>{info}</p>

                    <div className='flex justify-between font-bold'>
                        
                           <div className='flex items-center gap-x-1'>
                                 
                                <p><FaDollarSign></FaDollarSign></p>
                                <p> Price : { price}</p>
                           </div>

                           <div className='flex items-center gap-x-1'>
                                 
                                <p><FaBookmark></FaBookmark></p>
                                <p>Credit : { credit} hr</p>
                           </div>
                    </div>

                    <div className="card-actions py-2">
                        
                        <div className="btn bg-[#2F80ED] text-white font-bold rounded-xl w-full " onClick={()=>handleDetails(course,id,title)}>Select</div>

                    </div>
                </div>
            </div>
        </div>
    );
};


Course.propTypes={

    course : PropTypes.object.isRequired,
    handleDetails : PropTypes.func
}

export default Course;