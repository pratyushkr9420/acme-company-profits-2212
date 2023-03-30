import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWidget } from './store';
import { useParams, useNavigate } from 'react-router-dom';

const Widget = ()=> {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const {widgets} = useSelector(state => state)
  useEffect(() => {
    const widget = widgets.find(widget => widget.id === id)
    if(widget){
        setName(widget.name)
    }
  },[widgets])

  const update = async(ev) => {
    ev.preventDefault();
    await dispatch(updateWidget({ id, name }));
    navigate('/widgets');
  };

  return (
    <form onSubmit={ update }>
      <input value={ name } onChange={ ev => setName(ev.target.value)}/>
      <button>Update</button>
    </form>
  );
};

export default Widget;
