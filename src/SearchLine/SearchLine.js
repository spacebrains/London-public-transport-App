import React from 'react';
import './SearchLine.css'

const SearchLine =({onNewLine=f=>f,lineList=[]})=>{
    let _line, _direction;
    const submit = e => {
        e.preventDefault();
        onNewLine(_line.value,_direction.value);
        _line.value='';
    };

    const choice=(e)=>{
        _line.value=e.target.dataset.line
    };

    return(
        <section className='SearchLine'>
            <form className='search-form' onSubmit={submit}>
                <div className='search-form__input-container'>
                    <input
                        className='search-form__input'
                        type="text"
                        ref={input=>_line=input}
                        placeholder='line name'
                        required
                    />
                </div>
                <select
                    className='search-form__select'
                    name='direction'
                    ref={input=>_direction=input}
                >
                    <option  value="inbound">inbound</option>
                    <option  value="outbound">outbound</option>
                </select>
                <button className='search-form__button'>SEARCH</button>
            </form>
            <div className='search-form__list' >
                For example:
                <div className='search-form__list_example' onClick={choice}>
                {lineList.map((line)=>
                    <span data-line={line} key={line.toString()}>{line} </span>
                )}
                </div>
            </div>
        </section>

    )
};

export default SearchLine;