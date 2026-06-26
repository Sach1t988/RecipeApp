import type { LoginResponse } from "~/types/types"

export const useAuth = () => {
    const token = useCookie<string | null>("access_token")
    const login = async(email:string,password:string)=>{
        try {
            const {data,error} = await useFetch<LoginResponse>(
                "https://api.escuelajs.co/api/v1/auth/login",
                {
                    method:"POST",
                    body:{
                        email,
                        password
                    }
                }
            )
            if(error.value){
                throw error.value
            }
            token.value = data.value!.access_token
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }
    const logout= ()=>{
        token.value = null
        navigateTo("/login")
    }
    return{
        login,
        logout,
        token
    }
}