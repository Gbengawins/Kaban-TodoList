import React from 'react';
import { Link} from 'react-router-dom';

const TaskContainer = ({ socket }) => {
  return (
        <div className="container">
            <div className="pending__wrapper">
                <h3>Todo Tasks</h3>
                <div className="pending__container">
                    <div className="pending__items">
                        <p>Send twenty wedding invitations</p>
                        <p className="comment">
                            <Link to="/comments"></Link>
                        </p>
                    </div>
                </div>
            </div>
        
            <div className="ongoing__wrapper">
              <h3>In Progress</h3>
              <div className="ongoing__container">
                  <div className="ongoing__items">
                      <p>Book for wedding Cake</p>
                      <p className="comment">
                          <Link to="/comments">Add comment</Link>
                      </p>
                  </div>
              </div>
            </div>
          <div className="completed__wrapper">
              <h3>Completed Tasks</h3>
              <div className="completed__container">
                  <div className="completed__items">
                      <p>Reception Hall Booking</p>
                      <p className="comment">
                          <Link to="/comments=">Hall visited, paid for, contract signed</Link>
                      </p>
                  </div>
              </div>
            </div>
      </div>
  )
}

export default TaskContainer