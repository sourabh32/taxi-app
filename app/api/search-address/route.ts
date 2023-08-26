import { NextResponse } from "next/server";
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request:any) {

    const {searchParams}=new URL(request.url);

    const searchText=searchParams.get('q');
console.log(searchText,process.env.MAPBOX_ACCESS_TOKEN)
    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&session_token=03026892-10fa-4ad1-88a2-d8756590f699'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN + "&country=IN",
    {
        headers:{
            "Content-Type": "application/json"
        }
    })

    const searchResult=await res.json();
    return NextResponse.json(searchResult)
    
}