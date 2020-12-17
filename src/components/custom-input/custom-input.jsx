import React, {useRef} from "react";
import styled from "styled-components";

import DolarIcon from "./dolar-icon.svg";


const Input = styled.input`
  border: 1px solid #B1B1B1;
  color: black;
  border-radius: 7px;
  padding: 0.8em;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background: #aaaaaa;
  }
  &:invalid {
    color: red;
  }
`;


const Wrapper = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  align-items: center;
`;

const Label = styled.label`
  padding: .3em;
  font-weight: bold;
  text-transform: capitalize;
  transition: 0.3s;
  z-index: 0;
  ${Wrapper}:hover & {
    color: black;
  }
  ${Wrapper}:focus-within & {
    color: black;
  }
`;

const Comment = styled.span`
  left: 0;
  padding: .3em;
  font-weight: 200;
`;

const DeleteDataFromInput = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: none;
  display: flex;
  background-color: grey;
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover{
    transform: scale(1em);
  }
`

const IconSide = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: none;
  display: flex;
  background-image: url(${props => props.icon === 'dolar' && DolarIcon});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover{
    transform: scale(1em);
  }
`

function CustomInput({
  name,
  label,
  loading,
  icon,
  handleChange,
  handleClick,
  comment,
  paddingWrapper,
  bottomComment,
  ...otherProps
}) {

  let observer = useRef()

  const handleClickDeleteFromInput = (event)=>{
    event.preventDefault()
    event.target.value=''
    handleClick(event)
    observer.current.focus()
  }

  return (
    <Wrapper paddingWrapper={paddingWrapper} margin={comment && "0 0 1.4em 0"}>
      {label ? <Label>{label}</Label> : ""}
      <Input name={name} ref={observer} onChange={handleChange} {...otherProps}></Input>
      <IconSide icon={icon}/>
      {handleClick && <DeleteDataFromInput name={name} onClick={handleClickDeleteFromInput} />}
      {comment && <Comment bottomComment={bottomComment}>{comment}</Comment>}
    </Wrapper>
  );
}

export default CustomInput;