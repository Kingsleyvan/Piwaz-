/* eslint-disable prettier/prettier */
import React, {  useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import Register from '../components/SignUp/index';
import register from '../contex/actions/auth/register';
import axios from '../../helpers/axios';
import {GlobalContext} from '../../context/provider';



const SignUP = () => {
 const [form,setFrom] = useState({});
 const [errors,setError] = useState({});
 const {authDispatch,authState:{error,loading,data}} = useContext(GlobalContext);

 const onChange = ({name ,value}) =>{

   setFrom({...form,[name]:value});

   if (value !== ''){
if (name === 'Password'){

if (value.length < 8){
  setError((prev)=>{
    return {...prev,[name]:'Please fill needs min 8 characters'};
  });

}
else {
  setError((prev)=>{
    return {...prev,[name]:null};
  });
}
} else {
   setError((prev)=>{
    return {...prev,[name]:null};
  });


}
} else {
   setError((prev)=>{
    return {...prev,[name]:'Please fill field'};
  });}
 };
 const onSubmit = () => {

//console.log('form :>>'.form);

if (!form.userName){setError(prev=>{
  return {...prev,userName:'Please fill this field'};
});}

if (!form.firstName){setError(prev=>{
  return {...prev,firstName:'Please fill this field'};
});}


if (!form.lastName){setError(prev=>{
  return {...prev,lastName:'Please fill this field'};
});}


if (!form.email){setError(prev=>{
  return {...prev,email:'Please fill this field'};
});}


if (!form.userName){setError(prev=>{
  return {...prev,userName:'Please fill this field'};
});}

if (!form.ConfirmPassword){setError(prev=>{
  return {...prev,ConfirmPassword:'Please fill this field'};
});}

if (!form.Password){setError(prev=>{
  return {...prev,Password:'Please fill this field'};
});}
// eslint-disable-next-line no-lone-blocks
{
if
 ( Object.values(form).length === 6 &&
  Object.values(form).every((item) =>item.trim().length > 0 ) &&
  Object.values(errors).every((item) =>!item )
  )
  {
register(form)(authDispatch);
  }}
 };
  return ( <Register
  onChange={onChange}
  onSubmit={onSubmit}
   form={form}
   error={error}
   errors={errors}
   loading={loading}


    />

  );

};
export default SignUP;
