import axios from 'axios';

export default {
    getvote(uuid){
        return axios.get('http://localhost:8011/votes/'+uuid,{
            headers:  {Authorization: "Bearer "+localStorage.getItem("userToken")}
        }).catch();
    },
    getvotes(){
        return axios.get('http://localhost:8011/votes/',{
            headers:  {Authorization: "Bearer "+localStorage.getItem("userToken")}
        }).catch();
    },
    updateVote(vote,uuid){
        return axios.put('http://localhost:8011/votes/'+uuid,{
            title: vote.title,				
            desc: vote.description,
            start_date: vote.start_date,
            end_date: vote.end_date
        },{
            headers:  {Authorization: "Bearer "+localStorage.getItem("userToken")}
        }).catch();
    },
    createVote(vote){
        return axios.post('http://localhost:8011/votes/',{
            title: vote.title,				
            desc: vote.description,
            start_date: vote.start_date,
            end_date: vote.end_date
        },{
            headers:  {Authorization: "Bearer "+localStorage.getItem("userToken")}
        }).catch();
    },
    deleteVote(uuid){
        return axios.delete('http://localhost:8011/votes/'+uuid,{
            headers:  {Authorization: "Bearer "+localStorage.getItem("userToken")}
        }).catch();
    }
};