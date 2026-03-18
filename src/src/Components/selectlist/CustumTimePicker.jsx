import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const CustomTimePicker = styled.div`
  position: relative;
  width: ${props => props.width || '150px'};
`;

const TimeInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  appearance: none;
`;

const ClockIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const CustomTimePickerComponent = ({ width }) => {
  const [time, setTime] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const timeInputRef = useRef(null);

  const handleTimeChange = event => {
    setTime(event.target.value);
  };

  const handleClockIconClick = () => {
    setShowTimePicker(!showTimePicker);
    if (timeInputRef.current) {
      timeInputRef.current.focus();
    }
  };

  return (
    <CustomTimePicker width={width}>
      <TimeInput
        ref={timeInputRef}
        type="time"
        value={time}
        onChange={handleTimeChange}
      />
      <ClockIcon onClick={handleClockIconClick}>⏰</ClockIcon>
      {showTimePicker && (
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          onBlur={() => setShowTimePicker(false)}
        />
      )}
    </CustomTimePicker>
  );
};

export default CustomTimePickerComponent;
