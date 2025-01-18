import React, { useState } from 'react'

export default function Login() {

    const [isLogin, setLogin]=useState(false);
    // if(isLogin){
    //     return(

    //         <>
    //         <h1>Welcome to Dashboard</h1>
    //         </>
    //     )
    // }else{

    //     return(

    //         <>
    //         <h3>Incorrect Login</h3>

    //         </>
    //     )
    // }


    // return(

    //     <>
    //     {isLogin? <h1>Welcome to Dashboard</h1>:<h3>Incorrect Login</h3>}
    //     </>
    // )


    return(

        <>
        {isLogin&& <h1>Welcome to Dashboard</h1>}

        {!isLogin&&<h3>Incorrect Login</h3>}
        </>
    )

}
