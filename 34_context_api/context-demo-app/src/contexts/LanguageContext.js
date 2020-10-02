import React, { Component, createContext } from 'react'

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
    constructor(props){
        super(props);
        this.state = { language: "spanish" }
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage(e){
        this.setState({ language: e.target.value });
    }

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

// Higher order component to make sure component can be directly passed on so we don't have to create markup in Navbar
export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
); // Input: Component, props. Returns new component with original props and language context
