import React from "react";

import './GoalList.css'

import GoalItem from './GoalItem';

const GoalList = ({goals}) => {
  return (
    <div>
      <ul className="goal-list">
        {goals.map((item)=>
            <GoalItem content={item} ></GoalItem>
        )}
      </ul>
    </div>
  );
};

export default GoalList;
