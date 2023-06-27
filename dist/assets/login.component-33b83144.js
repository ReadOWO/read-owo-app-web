import{_ as p,m,o as a,c as l,a as s,w as d,v as u,t as c,b as _,d as g,p as f,e as h}from"./index-38f6e732.js";import{P as v}from"./Profile-service-4dd2bbb2.js";const w={name:"login.component",data(){return{userName:"",password:"",errorMessage:""}},async created(){this.profileService=new v},methods:{...m(["setProfile","setIsAuthenticated"]),async login(){(await this.profileService.getAll()).data.forEach(e=>{e.name===this.userName&&e.user.password===this.password?(this.setProfile(e),this.setIsAuthenticated(!0)):(this.errorMessage="Invalid username or password",this.resetForm())}),this.toHome()},goToRegister(){this.$router.push("/register")},resetForm(){this.$refs.formulario.reset()},toHome(){this.$router.push("/home")}}},i=r=>(f("data-v-91962278"),r=r(),h(),r),N={class:"login-container"},I=i(()=>s("h2",null,"LOG IN",-1)),b={class:"form-group"},S=i(()=>s("label",null,"User Name:",-1)),y={class:"form-group"},T=i(()=>s("label",null,"Password:",-1)),A=i(()=>s("button",{type:"submit",class:"login-button"},"LOG IN",-1)),P={key:0,class:"error-message"},E=i(()=>s("h2",null,"DON'T HAVE AN ACCOUNT YET?",-1));function M(r,e,x,R,t,n){return a(),l("div",N,[I,s("form",{onSubmit:e[2]||(e[2]=g((...o)=>n.login&&n.login(...o),["prevent"])),class:"login-form",ref:"formulario"},[s("div",b,[S,d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.userName=o),required:""},null,512),[[u,t.userName]])]),s("div",y,[T,d(s("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o),required:""},null,512),[[u,t.password]])]),A,t.errorMessage?(a(),l("p",P,c(t.errorMessage),1)):_("",!0)],544),E,s("button",{class:"login-button",onClick:e[3]||(e[3]=(...o)=>n.goToRegister&&n.goToRegister(...o))},"REGISTER")])}const O=p(w,[["render",M],["__scopeId","data-v-91962278"]]);export{O as default};
