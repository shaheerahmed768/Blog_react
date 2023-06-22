import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Shaheer</b> </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolorum minus adipisci impedit ipsa magnam in, earum cupiditate nobis tempore quae aperiam vitae repellendus error aliquam molestias? Quos, totam sit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi suscipit minus id facilis quaerat aliquam. Quod placeat odio facere atque explicabo quam, nesciunt iure harum distinctio ea obcaecati cum reiciendis!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente blanditiis adipisci commodi iure impedit corrupti animi quis, sed soluta nihil quos culpa veritatis non incidunt quia accusamus voluptas maiores? Delectus!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit vel quis et! Minus quod ipsa placeat nesciunt natus. Aliquam eum quos hic porro error illum mollitia suscipit architecto. Veritatis, laborum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio error fugiat minus recusandae? Maxime, exercitationem possimus. Autem nihil sapiente id, voluptate, dolor nulla animi amet ullam excepturi possimus magni ea!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint ab fugit ducimus quas, deleniti vero est consectetur animi vitae nulla tempora? Labore voluptates ad magni laborum quidem tempora quam!
            </p>
        </div>
    </div>
  )
}
