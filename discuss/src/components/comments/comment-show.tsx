import { fetchCommentByPostId } from "@/lib/query/comment";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import CreateCommentForm from "./create-comment-form";

type CommentShowProps = {
  postId: string;
  commentId: string;
};

const CommentShow: React.FC<CommentShowProps> = async ({
  postId,
  commentId,
}) => {
  const comments = await fetchCommentByPostId(postId);

  const comment = comments.find((comment) => comment.id === commentId);
  if (!comment) return null;

  const childrenComments = comments.filter(
    (comment) => comment.parentId === commentId
  );
  return (
    <div className="m-4 p-4 b border">
      <div className="flex gap-3">
        <div>
          <Avatar>
            <AvatarImage src={comment.user.image || ""} alt="User Image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-gray-500 text-sm font-medium">
            {comment.user.name}
          </p>
          <p className="text-gray-800">{comment.content}</p>
          <CreateCommentForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      {childrenComments.map((comment) => (
        <CommentShow key={comment.id} postId={postId} commentId={comment.id} />
      ))}
    </div>
  );
};

export default CommentShow;
