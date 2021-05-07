import axios from 'axios'
import React, { useEffect , useState , useRef } from 'react'
import { useDispatch , useSelector} from 'react-redux'

import { InputField , RadioInputField , TextAreaInputField ,SelectInputField , FileInputField } from '../../config/FormElements'

import DotLoader from '../DotLoader'


import { fetchAcademicLevels } from '../../actions/OrderActions'

const AcademicLevel = () => {


    const dispatch =  useDispatch();
    
    const AcademicLevels = useSelector( state => state.academicLevels)


    const { allAcademicLevels , loading } = AcademicLevels;

    
    
   
    let levelForm = {
        level : "",
        active: false
    }

    const resetForm = () =>{
        levelForm.level = ""
        levelForm.active = false
    }


    const levelActiveSelects = [
        {
            name : "Active",
            value: true
        }, 
        {
            name : "Inactive",
            value: false
        },
    ]


    const showModal = (aLevel) =>{

        window.Toast.fire({
            icon:'success',
            title: aLevel.level
        })
    }

    const deleteLevel = async (id) =>{

        const res = await axios.delete('http://localhost:5000/auth/academic-level/'+ id )

        

        if(res.status == 201){

            dispatch(fetchAcademicLevels())

        } else{

            window.Toast.fire({
                icon: 'success',
                title: res.data.message
            })

        }
    }


    
    const addLevel = async (e) =>{
        e.preventDefault();
        

        
        const res = await axios.post('http://localhost:5000/auth/academic-level' , levelForm)

        
       if(res.status == 201){

            dispatch(fetchAcademicLevels())

            window.Toast.fire({
                icon: 'success',
                title: res.data.message
            })


           resetForm()

        } else{
            window.Swal.fire({
                icon: 'danger',
                title: "Failed To Add Level!"
            })
        }
    }




useEffect(() => {
    
    dispatch(fetchAcademicLevels())
    resetForm()

}, [])

    return (
      
       <div className="academic--level--group">
           <div className="academic--levels">
                <div className="levels--table">

                    <div className="level--table--header">
                        
                        
                        <div className="level">
                            LEVEL
                        </div>

                        <div className="status">
                            STATUS
                        </div>

                    </div>

                    <div className="levels--table--body">
                        
                        


                        { (loading) ? <DotLoader/>  :   allAcademicLevels.map((academicLevel,index) => (
                                <div className="academic--level" >

                                <div className="level" onClick={(e) => {
                                    e.preventDefault()
                                    showModal(academicLevel)
                                }}>
                                      {index + 1 +"."}  {academicLevel.level}
                                    </div>

                                    <div className="status">
                                        <span className="active-state" onClick={(e) => {
                                            e.preventDefault()
                                            showModal(academicLevel)
                                        }}>
                                        { (academicLevel.active) ? <span>ACTIVE</span> : <span>INACTIVE</span> }
                                        </span>

                                        <span className="academic--level--actions">
                                            

                                            <svg onClick={(e) => {
                                                    e.preventDefault()
                                                    deleteLevel(academicLevel.id)
                                                }} className="h-6 hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" xmlnsXink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" fill="#0065CD">
                                                <path d="M14.1 5.9L3 17v4h4L18.1 9.9 14.1 5.9zM15.6 4.4L18 2l4 4-2.4 2.4L15.6 4.4z" fill="#0065CD" />
                                            </svg>


                                            <svg onClick={(e) => {
                                                e.preventDefault()
                                                deleteLevel(academicLevel.id)
                                            }} className="h-6 hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" fill="#FF0000">
                                                    <path d="M14 4C13.477778 4 12.94539 4.1913289 12.568359 4.5683594C12.191329 4.9453899 12 5.4777778 12 6L12 7L7 7L6 7L6 9L7 9L7 25C7 26.645455 8.3545455 28 10 28L17 28L17 27.855469C18.367249 30.320181 20.996209 32 24 32C28.4 32 32 28.4 32 24C32 19.939374 28.931363 16.567445 25 16.070312L25 9L26 9L26 7L25 7L20 7L20 6C20 5.4777778 19.808671 4.9453899 19.431641 4.5683594C19.05461 4.1913289 18.522222 4 18 4L14 4 z M 14 6L18 6L18 7L14 7L14 6 z M 9 9L23 9L23 16.070312C22.301956 16.158582 21.631165 16.334117 21 16.591797L21 12L19 12L19 17.771484C18.18962 18.424016 17.507605 19.229482 17 20.144531L17 12L15 12L15 23L16.070312 23C16.028764 23.32857 16 23.660626 16 24C16 24.691044 16.098874 25.35927 16.265625 26L10 26C9.4454545 26 9 25.554545 9 25L9 9 z M 11 12L11 23L13 23L13 12L11 12 z M 24 18C27.3 18 30 20.7 30 24C30 27.3 27.3 30 24 30C20.7 30 18 27.3 18 24C18 20.7 20.7 18 24 18 z M 21.699219 20.300781L20.300781 21.699219L22.599609 24L20.300781 26.300781L21.699219 27.699219L24 25.400391L26.300781 27.699219L27.699219 26.300781L25.400391 24L27.699219 21.699219L26.300781 20.300781L24 22.599609L21.699219 20.300781 z" fill="#FF0000" />
                                             </svg>


                                        </span>
                                    </div>
                                
                                </div>
                               )
                            )
                        }

                        
                       
                    </div>

                </div>
           </div>

           <div className="new--academic--level">
               <form action="" onSubmit={addLevel}>
                <InputField labelText='Level' name="level" type='text' placeholder="Academic Level" onChange={(e) => levelForm.level = e.target.value}/>
                <SelectInputField labelText="Status" selectName="active" selectID="active" selectOptions={levelActiveSelects} onChange={(e) => levelForm.active =  e.target.value}/>               
                <button type="submit" className="w-full mt-6 btn-blue" > Add Level</button>

               </form>
           </div>
        </div>
      
    )
}

export default AcademicLevel
