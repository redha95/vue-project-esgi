import VueRouter from "vue-router";
import VoteDetails from "../components/VoteDetails";
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
        }
    ]
});

export default router;