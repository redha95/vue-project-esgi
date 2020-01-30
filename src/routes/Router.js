import VueRouter from "vue-router";
import VoteDetails from "../components/VoteDetails";
import CreateVote from "../components/CreateVote";
import UpdateVote from "../components/UpdateVote";
import NotFound from "../components/NotFound";
import AllVotes from "../components/AllVotes";
import Hello from "../components/Hello";
import Account from '../components/Account';
import ProfilUser from '../components/ProfilUser';
import UpdateProfil from '../components/UpdateProfil';
import Register from '../components/authentification/Register';

const router = new VueRouter({
    mode:"history",
    routes: [
        { path: "/",
          name: "home",
          component:Hello,
        },
        { path: "/showVote/:UUID",
          name: "VoteDetails",
          component:VoteDetails,
          props: true,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") == null) {
              next('/account')
            }
            else next()
          }
        },
        { path: "/profil/:UUID",
          name: "ProfilUser",
          component:ProfilUser,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") == null) {
              next('/account')
            }
            else next()
          }
        },
        { path: "/allVotes",
          name: "allVotes",
          component:AllVotes,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") == null) {
              next('/account')
            }
            else next()
          }
        },
        { path: "/createVote",
          name: "createVote",
          component:CreateVote,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") == null) {
              next('/account')
            }
            else next()
          }
        },
        { path: "/updateVote/:UUID",
          name: "UpdateVote",
          component:UpdateVote,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") == null) {
              next('/account')
            } else if(localStorage.getItem("accessLevel") == "0"){
              next('/allVotes')
            }
            else next()
          }
        },
        { path: "/updateProfil/:UUID",
          name: "UpdateProfil",
          component:UpdateProfil,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") == null) {
              next('/account')
            } 
            else next()
          }
        },
        { path: "/newuser",
          name: "NewProfil",
          component:Register,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") == null) {
              next('/account')
            } 
            else next()
          }
        },
        { path: "/account",
          name: "account",
          component:Account,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("userToken") != null) {
              next('/profil/'+localStorage.getItem("uuid"))
            } 
            else next()
          }
        },
        { path: '/404', component: NotFound },  
        { path: '*', redirect: '/404' },  
    ]
});

export default router;