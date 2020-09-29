import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({
            copied: true
        }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        });
    }
    render() {
        const {
            name,
            background,
            moreUrl,
            showingFullPalette,
            classes
        } = this.props;
        const { copied } = this.state;
        // const isDarkColor = chroma(background).luminance() <= 0.08;
        // const isLightColor = chroma(background).luminance() >= 0.7;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.ColorBox} style={{ background: background }} >
                    <div
                        className={classNames(classes.copyOverlay, {
                            [classes.showOverlay]: copied
                        })}
                        style={{ background: background }}></div>
                    <div
                        className={classNames(classes.copyMessage, {
                            [classes.showMessage]: copied
                        })}
                    >
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {/* <span className='see-more'>More</span> */}
                    {/* stopPropagation to make sure the box/parent click event for copy does not trigger while routing */}
                    {showingFullPalette && (<Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>MORE</span>
                    </Link>)}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)
