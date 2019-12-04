import VueRouter from "vue-router";
import VoteDetails from "../components/VoteDetails";
import HelloWord from "../components/HelloWorld";

const router = new VueRouter({
    mode:"history",
    routes: [
        { path: "/",
          name: "home",
          component:HelloWord
        },
        { path: "/showVote",
          name: "VoteDetails",
          component:VoteDetails
        }
    ]
});

export default router;