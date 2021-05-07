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


    
    const addLevel = async (e) =>{
        e.preventDefault();
        

        
        const res = await axios.post('http://localhost:5000/auth/academic-level' , levelForm)

        
       if(res.status == 201){
            dispatch(fetchAcademicLevels()) 
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
                                <div className="academic--level" onClick={(e) => {
                                    e.preventDefault()
                                    showModal(academicLevel)
                                }}>

                                    <div className="level">
                                      {index + 1 +"."}  {academicLevel.level}
                                    </div>

                                    <div className="status">
                                        { (academicLevel.active) ? <span>ACTIVE</span> : <span>INACTIVE</span> }
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
