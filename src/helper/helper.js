import moment from "moment"

export const returnDateFromNow=(date)=>{
    return moment(date).fromNow()
}