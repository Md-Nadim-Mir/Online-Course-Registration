
import { useState } from 'react'
import './App.css'
import Cart from './assets/Component/Cart/Cart'
import Courses from './assets/Component/Courses/Courses'
import Header from './assets/Component/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // state declare 
  let [details, setDetails] = useState([]);

  // state of remaining credit
  let [remain, setRemain] = useState(20);

  // state total credit hour
  let [time, setTime] = useState(0);

  // state for total price
  let [price, setPrice] = useState(0)

  //declare function

  let handleDetails = (course, id, title) => {



    // // remain credit 
    let credit = course.credit;

    // // remain credit end


    //  title set
    let newItem = details.find(itemName => itemName == title);

    if (newItem) {

      return toast('You already added this course')

    }

    else {

      


      // remaining 
      let remainCredit = remain - credit;
      remainCredit < 0 ? '' : setRemain(remainCredit);

      // poray somoy 
      let newTime = time + credit;
      
      if(newTime > 20) {
       return toast('Credit limit reached.You can not add more than 20')
      }
        
      else{
        setTime(newTime);
      } 

      // price

      let price1 = course.price;
      let newPrice = price + price1;
      newTime < 21 ? setPrice(newPrice) : '';

      //  details added
      let newTitle = [...details, title];
      setDetails(newTitle);


    }




  }


  return (

    <>

      <Header ToastContainer={ToastContainer}></Header>


      <div className='md:flex'>

        <Courses handleDetails={handleDetails}></Courses>
        
     
           
        <Cart details={details} remain={remain} time={time} price={price}></Cart>
            
    

      </div>



    </>

  )
}

export default App
