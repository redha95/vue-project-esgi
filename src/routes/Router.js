import VueRouter from "vue-router";
import VoteDetails from "../components/VoteDetails";
import CreateVote from "../components/CreateVote";
import UpdateVote from "../components/UpdateVote";
import NotFound from "../components/NotFound";
import AllVotes from "../components/AllVotes";
import HelloWord from "../components/HelloWorld";

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
        { path: "/updateVote/:UUID",
          name: "UpdateVote",
          component:UpdateVote
        },
        { path: '/404', component: NotFound },  
        { path: '*', redirect: '/404' },  
    ]
});

export default router;