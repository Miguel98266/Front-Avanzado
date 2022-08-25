import useForm from "@/hooks/useForm";
import { LoginUser } from "@/services/UserServices";

const Login = () => {
  const sendData=async(data)=>{
    try {
      const result=await LoginUser(data);
      if (result.status===200) {
        console.log(result)
      }
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    }
    
  }
  // Estado inicial con el hook useForm
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: "",
    password: "",
  });
  return (
    <form className='container'>
      <div className='mt-5 mb-3'>
        <label htmlFor='exampleFormControlInput1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='name@example.com'
          name="email"
          value={input.email}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className='mb-3 row'>
        <label htmlFor='inputPassword' className='form-label'>
          Password
        </label>
        <div className='col-sm-12'>
          <input type='password' className='form-control' value={input.password} id='inputPassword' name="password" onChange={(e) => handleInputChange(e)} />
        </div>
      </div>
      <div className='row'>
        <div className='col-8 offset-2'>
          <button type='button' className='btn btn-primary w-100' onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </form>

  );
};

export default Login;
