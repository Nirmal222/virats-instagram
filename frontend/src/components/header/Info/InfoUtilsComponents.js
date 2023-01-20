import { MdVerified } from "react-icons/md";
import { Options, Suggestions } from "..";
import { memo } from "react"
export const InfoCount =  memo(function  (){
    return (
      <div id="count">
          <span>
            <b>5000</b> posts
          </span>
          <span>
            <b>232M</b> followers
          </span>
          <span>
            <b>262</b> following
          </span>
        </div>
    )
})
  
export function InfoDetails({user}){
    return (
      <div id="details">
          <p>
            <span>{user.name}</span> <br /> <span>Carpediem!</span> <br />{" "}
            <span>one8.com</span>
          </p>
        </div>
    )
  }
  
export const InfoFoorter = memo( function (){
    return (
      <p id="info-foot">
          Followed by milkuri_pranay, kunapavankalyan, tinopatel_ + 52 more
      </p>
    )
})



export function NameFollowers({user}){
    return (
        <div id="name-followers">
        <span>
          <p>{user.name}</p>
          <i>
            <MdVerified />
          </i>
        </span>
        <span>
          <button>Follow</button>
          <button>Message</button>
          <button>
            <Suggestions />
          </button>
          <i>
            <Options />
          </i>
        </span>
      </div>
    )
}