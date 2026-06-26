export default defineNuxtRouteMiddleware(()=>{

    const token = useCookie<string | null>("access_token")

    if(!token.value){

        return navigateTo("/login")

    }

})
