import React from 'react';
import s from './Searchbar.module.css'

class Searchbar extends React.Component {
    state = {
        searchName: ''
    };

    handleChange = (event) => {
        this.setState({
            searchName: event.currentTarget.value.toLowerCase()
        })
        // console.log(this.state);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.searchName.trim() === "") {
            alert("Введите запрос")
            return
        }
        this.props.onSubmit(this.state.searchName);

        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            searchName: ""        
        })
    };

    render() {
        const { searchName } = this.state;
        return (
            <header
                className={s.Searchbar}                
            >
                <form
                    onSubmit={this.handleSubmit}
                    className={s.SearchForm}                    
                >
                    <button
                        type="submit"
                        className={s.SearchForm__button}                       
                    >
                        <span
                            className={s.SearchForm__buttonText}                            
                        >Search</span>
                    </button>

                    <input
                        onChange={this.handleChange}
                        className={s.SearchForm__input}                        
                        type="text"                        
                        value={searchName}
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;