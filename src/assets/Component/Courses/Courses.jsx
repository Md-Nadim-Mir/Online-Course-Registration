
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleDetails}) => {

    // state declare
    let [courses,setCourses]=useState([]);

    // data load use UseEffect

    useEffect(()=>{

        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])


    return (
        <div className="md:w-1/2 lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 m-1 md:m-5">
                     {
                        courses.map(course=><Course key={course.id} course={course}handleDetails={handleDetails}></Course>)
                     }
        </div>
    );
};

Courses.propTypes={

    handleDetails : PropTypes.func

}

export default Courses;