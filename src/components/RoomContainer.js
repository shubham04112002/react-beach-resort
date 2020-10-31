
import React from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomsList from "./RoomsList"
import {withRoomConsumer} from "../context"
import Loading from "./Loading"
   function RoomContainer({context}){
       const {loading,rooms,sortedRooms}= context;
       if(loading){
           return <Loading/>
       }
       return(<div>
           <RoomsFilter rooms={rooms}/>
           <RoomsList rooms={sortedRooms}/>
       </div>

       );
   }

   export default withRoomConsumer(RoomContainer);













// import React from 'react'
// import RoomsFilter from "./RoomsFilter"
// import RoomsList from "./RoomsList"
// import {RoomConsumer} from "../context"
// import Loading from "./Loading"
// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const {featuredRppms,getRoom,loading,rooms,sortedRooms} = value;
//                     if(loading){
//                        return <Loading/>
//                     }
//                     return <div>
//                     hello from rooms container
//                     <RoomsFilter rooms={rooms}/>
//                     <RoomsList rooms={sortedRooms}/>
//                 </div>
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
