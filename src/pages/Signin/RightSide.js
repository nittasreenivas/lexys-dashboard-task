

  import { useNavigate } from 'react-router-dom';
  // import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
const RightSide = () => {
      const Navigate= useNavigate()

  // const [user,setUser] = useState({
  //   email:"",
  //   password:""
  // })
  // let name,value;
  // const getUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;
  //   setUser({...user,[name]:value})
  // }
  // const postData = async(e) => {
  //   e.preventDefault()
  //   const {email,password} = user;
  //   if(email && password){
  //     const res = await fetch("https://reactauth-9ef23-default-rtdb.firebaseio.com/reactform.json",
  //     {
  //       method:"POST",
  //       headers:{
  //        "Content-Type" : "application/json",
  //       },
  //       body:JSON.stringify({
  //        email,
  //        password,
  //       }),
  //     }
  //     );
  //     if(res){
  //      setUser({
  //        email:"",
  //        password:""
  //      })
  //      alert("Data Stored Successfully")
  //     }
  //   }else{
  //   alert("Please fill the data")
  //   }
   
  // };
    const Signin =  (e) => {
    e.preventDefault()
    Navigate('/surveys');
    }
  return (
    <div>
      <div className="img">
        <Image
          src="https://lcrm.lexyslabs.com/static/media/laurus_logo.abe71e686cbc782ce39be7406def10fc.svg"
          thumbnail
          style={{ border: "none",marginTop:"75px",display:"inline-block" }}
          className="center"
        />
      </div>
      <form style={{ width: "70%", marginLeft: "10%", marginTop: "10%" }} method="POST">
  <div className="form-outline mb-4">
  <label className="form-label required" for="form2Example1">Email </label>
    <input type="email" placeholder="Enter ID" id="form2Example1" className="form-control"
     name="email"  required />
  </div>
  <div className="form-outline mb-4">
  <label className="form-label required" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" placeholder="Enter Password"
     name="password"  required/>
    
  </div>

  
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
    </div>
    <div className="col">
    <a href="#!" style={{textDecoration:"none"}}>Forgot password?</a>
    </div>
  </div>
  <button type="button" className="btn btn-primary btn-block mb-4" style={{width:"520px",borderRadius:"10px"}} onClick={Signin} >Signin</button>
</form>

    </div>
  );
};

export default RightSide;

//onClick={Signin}