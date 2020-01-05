import VueRouter from "vue-router";
import VoteDetails from "../components/VoteDetails";
import CreateVote from "../components/CreateVote";
import NotFound from "../components/NotFound";
import AllVotes from "../components/AllVotes";
import HelloWord from "../components/HelloWorld";
import Authentification from '../components/Authentification';

const router = new VueRouter({
    mode:"history",
    routes: [
        { path: "/",
          name: "home",
          component:HelloWord
        },
        { path: "/showVote/:UUID",
          name: "VoteDetails",
          component:VoteDetails,
          props: true
        },
        { path: "/allVotes",
          name: "allVotes",
          component:AllVotes
        },
        { path: "/createVote",
          name: "createVote",
          component:CreateVote
        },
        { path: '/404', component: NotFound },  
        { path: '*', redirect: '/404' },  
        { path: "/account",
        name: "account",
        component:Authentification
      }
    ]
});

export default router;