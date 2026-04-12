import { useState } from "react";



function Signin(){


    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSignin = async (e: React.FormEvent) => {
         e.preventDefault();

         try{
            if (!email || !password) return alert ("Invalid credentials");
            const loginPayload = {
                email: email,
                password: password,
            }
            const url = `http://localhost:3000/fivem/api/user/login`;
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginPayload)
            });
            const data = await res.json();
            if (!data.success) throw new Error("Error logging in user.");

            sessionStorage.setItem("fivemToken@mike", data.token)
         } catch (error){
            console.error("Error logging in user/ possible server problem", error);
         }
    }

    return (
        <>

        <div>


       <div>
        <form method="POST" onSubmit={handleSignin}> 
           <div>
           <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}></input>
           <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
           </div>

           <button type="submit">Sign in</button>
            

        </form>
       </div>

        </div>
        
        </>
    )
}

export default Signin;