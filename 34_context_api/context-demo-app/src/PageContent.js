import React, { Component } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

class PageContent extends Component {
    static contextType = ThemeContext; // This tells the component to find for the nearest provider with same context
    render() {
        const { isDarkMode } = this.context;
        const styles = {
            backgroundColor: isDarkMode ? "black" : "white" ,
            height: "100vh",
            width: "100vw"
        }
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        )
    }
}

export default PageContent
