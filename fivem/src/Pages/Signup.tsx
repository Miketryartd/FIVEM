import { useState } from "react";



function Signup(){

    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [suffix, setSuffix] = useState<string>("");
    const [birthdate, setBirhdate] = useState<string>("");
    const [email, setEmail] = useState<string>();
    const [address, setAddress] = useState<string >("");
    const [contact, setContact] = useState<string >("");
    const [password, setPassword] = useState<string >("");


    const handleSignup = async (event: React.FormEvent) =>{
                  event.preventDefault();


                  if (!firstName || !middleName || !lastName || !suffix || !email || !address || !contact || !password || !birthdate) return alert("Fill out form");

                  try{

                    const userData = {
                        firstName: firstName,
                        middleName: middleName,
                        lastName: lastName,
                        suffix: suffix,
                        birthdate: birthdate,
                        email: email,
                        address: address,
                        contact: contact,
                        password: password
                    }                     
                    const url = `http://localhost:3000/fivem/api/user/register`;
                    const res = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json"
                        },
                        body: JSON.stringify(userData)
                    });

                    const data = await res.json();
                    if (data.ok) alert("Successfully created account");
                      
                  } catch (error){
                    console.error('Error creating account', error);
                  }

    }

    return(

        <>
        
        <div>
            <div>
                <form method="POST" onSubmit={handleSignup}>
                   <div>
                   <input type="text" 
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}></input>
                       <input type="text" 
                    placeholder="Middle Name"
                    onChange={(e) => setMiddleName(e.target.value)}></input>
                       <input type="text" 
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}></input>
                       <input type="text" 
                    placeholder="Suffix"
                    onChange={(e) => setSuffix(e.target.value)}></input>
                    <input type="date" placeholder="Birthdate"
                    onChange={(e) => setBirhdate(e.target.value)}></input>
                   </div>

                  <div>
                  <input type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <input type="text"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}></input>
                  <input type="tel"
                  placeholder="Phone number"
                  onChange={(e) => setContact(e.target.value)}></input>
                  <input type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <button type="submit">Create account</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup;