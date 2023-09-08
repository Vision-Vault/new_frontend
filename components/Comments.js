
import { useAuth } from "@/contexts/auth"
import 'font-awesome/css/font-awesome.min.css';
import CommentCard from "./CommentCard";

export default function Comments({ handel, del, data, getReply, updateComment, postId, activate }) {
    const { user, token } = useAuth()

    function submithandeler(event) {
        event.preventDefault();
        const dataToSave = {
            "body": event.target.comment.value,
            "project": postId,
            "user": user.id
        };

        handel(dataToSave)
        event.target.reset();
    }

    return (

        <div className='ascomments'>
            <form htmlFor="comment" className="create" method="post" onSubmit={submithandeler} >
                <input id="comment" name="comment" placeholder="Write a comment ..." />
                <button type="submit"><i className="material-icons">send</i></button>
            </form>
            <section>
                {data.map((element) => (
                    <CommentCard data={element} del={del} getReply={getReply} updateComment={updateComment} activate={activate} postId={postId} />
                ))}
            </section>

        </div>
    )
}