import React,{useEffect} from 'react'
import { InputField , RadioInputField , TextAreaInputField ,SelectInputField , FileInputField } from '../config/FormElements.js'

const PlaceOrder = () => {

   
  
    const paperTypes = [
        {
            name : "Annotated Bibliography",
            value: "Annotated Bibliography"
        }, 
         {
            name : "Admission essay",
            value: "Admission essay"
        }
        , 
         {
            name : "Book Review/Report",
            value: "Book Review/Report"
        }
        , 
         {
            name : "Creative Writing",
            value: "Creative Writing"
        }
        , 
         {
            name : "Scholarship Essay",
            value: "Scholarship Essay"
        }
        , 
         {
            name : "Summary",
            value: "Summary"
        }
        , 
         {
            name : "Discussion Board Forums",
            value: "Discussion Board Forums"
        }
        , 
         {
            name : "Capstone Project",
            value: "Capstone Project"
        }
        , 
         {
            name : "Argumentative Essay",
            value: "Argumentative Essay"
        }
    ]
  
    const subjectAreas = [
        {
            name : "Accounting",
            value: "Accounting"
        }, 
         {
            name : "Agriculture",
            value: "Agriculture"
        }
        ,
         {
            name : "Anthropology",
            value: "Anthropology"
        }
        ,
         {
            name : "Chemistry",
            value: "Chemistry"
        }
        ,
         {
            name : "Business Studies",
            value: "Business Studies"
        }
        ,
         {
            name : "Ecology",
            value: "Ecology"
        }
        ,
         {
            name : "Criminal law",
            value: "Criminal law"
        }
        ,
         {
            name : "Linguistics",
            value: "Linguistics"
        }
        ,
         {
            name : "Public Administration",
            value: "Public Administration"
        }
        ,
         {
            name : "Tourism",
            value: "Tourism"
        }
    ]
    



    const paperFormats = [
        {
            name : "AMA",
            value: "AMA"
        }, 
        {
            name : "APA",
            value: "APA"
        },
        {
            name : "Chicago/Turabian",
            value: "Chicago/Turabian"
        }, 
        {
            name : "Harvard",
            value: "Harvard"
        },
        {
            name : "IEEE",
            value: "IEEE"
        }, 
        {
            name : "MHRA",
            value: "MHRA"
        },
        {
            name : "MLA",
            value: "MLA"
        }, 
        {
            name : "Oscola",
            value: "Oscola"
        },
        {
            name : "Vancouver",
            value: "Vancouver"
        },
        {
            name : "Others",
            value: "Others"
        }, 
        {
            name : "Not Applicable",
            value: "Not Applicable"
        }
    ]


    const prefEnglish = [
        {
            name : "UK-ESL",
            value: "UK-ESL"
        }, 
        {
            name : "UK",
            value: "UK"
        },
        {
            name : "US-ESL",
            value: "US-ESL"
        }, 
        {
            name : "US",
            value: "US"
        }
    ]


    const spacingTypes = [
        {
            name : "Double Spacing",
            value: "double"
        }, 
        {
            name : "Single Spacing",
            value: "single"
        }
    ]


    const academicLevels = [
        {
            name : "High School",
            value: "High School"
        }, 
        {
            name : "Undergraduate",
            value: "Undergraduate"
        },
        {
            name : "Master",
            value: "Master"
        }, 
        {
            name : "Doctoral",
            value: "Doctoral"
        }
    ]

    const urgency = [
        {
            name : "6 Hours",
            value: "6 Hours"
        }
        ,
        {
            name : "12 Hours",
            value: "12 Hours"
        }
        ,
        {
            name : "1 Day",
            value: "1 Day"
        }
        ,
        {
            name : "2 Days",
            value: "2 Days"
        }
        ,
        {
            name : "2 Days",
            value: "2 Days"
        }
        ,
        {
            name : "3 Days",
            value: "3 Days"
        }
        ,
        {
            name : "5 Days",
            value: "5 Days"
        }
        ,
        {
            name : "7 Days",
            value: "7 Days"
        }
        ,
        {
            name : "10 Days",
            value: "10 Days"
        }
        ,
        {
            name : "2 Weeks",
            value: "2 Weeks"
        }
        ,
        {
            name : "1 Month",
            value: "1 Month"
        }
        ,
        {
            name : "2 Months",
            value: "2 Months"
        }
    ]




    useEffect(() => {
        window.scrollTo(0,0)
        document.querySelector('title').text = 'AcademiaSteph21 | Place Order'
       

    }, [])

    return (
        <div className=" place-order-page">
            <h1 className="text-4xl">Order Paper</h1>
            <h1 className="mt-6 text-lg text-primary-4">Paper Details</h1>
            <form action="" className="w-5/6 sm:w-3/4 lg:w-3/5 mt-7 mb-14 lg:mb-28 2xl:w-1/2">                    
                    <InputField labelText='Topic' type='text' placeholder="Paper Topic" />
                    <SelectInputField labelText="Type of Paper" selectName="paper-type" selectID="paper-type" selectOptions={paperTypes}/>               
                    <SelectInputField labelText="Subject Area" selectName="subject-area" selectID="subject-area" selectOptions={subjectAreas}/>               
                    <TextAreaInputField labelText='Paper Details' textareaName='message' id='message' rows='5' placeholder='Provide detailed additional information about your assignment'/>
                   
                    <FileInputField labelText="Additional Materials"/>

                    <div className="flex flex-col justify-between sm:flex-row">
                        <SelectInputField parentClasses="w-full sm:w-2/5" labelText="Paper Format" selectName="paper-format" selectID="paper-format" selectOptions={paperFormats}/>               
                        <SelectInputField parentClasses="w-full sm:w-2/5" labelText="Preferred English" selectName="preferred-english" selectID="preferred-english" selectOptions={prefEnglish}/>  
                    </div>

                    <div className="flex flex-col justify-between sm:flex-row ">
                        <InputField type="number" parentClasses="w-full sm:w-2/5" labelText="Number of sources"  name="number-of-sources" id="number-of-sources" selectOptions={paperFormats}/>               
                        <SelectInputField parentClasses="w-full sm:w-2/5" labelText="Spacing" selectName="spacing" selectID="spacing" selectOptions={spacingTypes}/>  
                    </div>

                    <SelectInputField labelText="Academic Level" selectName="academic-level" selectID="academic-level" selectOptions={academicLevels}/>               
                    <SelectInputField labelText="Number Of Pages" selectName="academic-level" selectID="academic-level" selectOptions={academicLevels}/> 
                    <SelectInputField labelText="Urgency" selectName="urgency" selectID="urgency" selectOptions={urgency}/> 
            

                    <div className="mb-3 price-estimate">
                        <label className="mr-3">Total</label>
                       <span className="text-lg font-bold">$28.60</span> 
                    </div>

                    <button type="submit" className="w-full mt-6 sm:w-1/2 lg:w-1/3 btn-pri">Continue</button>
                    
            </form>
        </div>
    )
}

export default PlaceOrder
