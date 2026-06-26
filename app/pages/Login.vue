<script setup lang="ts">

definePageMeta({
    layout:"login",
    middleware:"guests"
})

const { login } = useAuth()

const form = reactive({

    email:"",
    password:""

})

const handleLogin = async()=>{

    const success = await login(

        form.email,
        form.password

    )

    if(success){

        await navigateTo("/")

    }else{
        alert("Invalid email or password")
    }

}

</script>

<template>
    <div class="flex flex-col items-center justify-center">
    <NuxtImg width="56px" densities="x1" src="/icon-green.png" format="webp" alt="" />
        <span class="text-3xl font-bold">Recipes</span>
        </div>
<div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Login Page
          </h1>
    </div>
    </div>
    
    <form @submit.prevent="handleLogin">
<div class="flex items-center m-6">
<div class="w-1/5">
      <label class="font-medium">
        Email
      </label>
    </div>

    <div class="w-4/5">
      <input
        type="email"
        id="email"
        v-model="form.email"
        class="border-2 border-gray-200 w-full py-2 px-4"
        placeholder="Email"
        required
      />
    </div>
    </div>  
    

<div class="flex items-center m-6">
    <div class="w-1/5">
      <label class="font-medium">
        Password
      </label>
    </div>

    <div class="w-4/5">
      <input
        type="password"
        id="password"
        v-model="form.password"
        class="border-2 border-gray-200 w-full py-2 px-4"
        placeholder="Password"
        required
      />
    </div>
</div>


<div class="m-8 flex justify-center">
 <button type="submit"  
            class="px-4 py-2 text-white self-start bg-black rounded-md text-lg cursor-pointer"
          >
            Login
          </button>


</div>
</form>

</template>


