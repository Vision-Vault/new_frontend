import { useAuth } from "@/contexts/auth"
import 'font-awesome/css/font-awesome.min.css';
import ReplyCard from "./ReplyCard";


export default function Reply({ handel, del, data, updateReplay, commentId }) {

    const { user, token } = useAuth()

    function submithandeler(event) {
        event.preventDefault();
        const dataToSave = {
            "body": event.target.reply.value,
            "parent_comment": commentId,
            "user": user.id
        };

        handel(dataToSave)
        event.target.reset();
    }

    return (
        <div className='asreply'>
            <section>
                {data.map((element) => {
                    return (
                        <ReplyCard data={element} del={del} updateReplay={updateReplay} commentId={commentId} />
                    )
                })}
            </section>
            <form className="create" method="post" onSubmit={submithandeler} >
                <input name="reply" placeholder="Reply ..." />
                <button type="submit"><i className="material-icons">send</i></button>
            </form>
        </div>
    )
}
