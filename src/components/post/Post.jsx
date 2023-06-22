import "./post.css"

export default function post() {
  return (
    <div className="Post">
        <img className="postImg" src="https://images.pexels.com/photos/16143559/pexels-photo-16143559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />    

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
             <span className="postTitle">Lorem ipsum dolor sit amet</span>
             <hr/>
             <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dignissimos, rerum odit veniam mollitia facilis ea pariatur consequuntur aut, fuga quis! Commodi non perferendis odit, optio placeat magni ullam iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dignissimos, rerum odit veniam mollitia facilis ea pariatur consequuntur aut, fuga quis! Commodi non perferendis odit, optio placeat magni ullam iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dignissimos, rerum odit veniam mollitia facilis ea pariatur consequuntur aut, fuga quis! Commodi non perferendis odit, optio placeat magni ullam iusto.</p>
    </div>
  )
}
