import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({
  post: {
    body,
    comment,
    title,
    user,
  },
}) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {user && (
        <UserInfo user={user} />
      )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comment.length ? (
      <CommentList comments={comment} />
    ) : (
      <b data-cy="NoCommentsMessage">
        No comments yet
      </b>
    )}
  </li>
);