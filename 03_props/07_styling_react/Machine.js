class Machine extends React.Component {
    render(){
        const {s1, s2, s3} = this.props; // Obj destructuring
        const isWinner = (s1 === s2) && (s2 === s3);
        const paraStyle = {fontSize: '30px', backgroundColor: 'purple'};
        
        return (
            <div className="Machine">
                {/* <label htmlFor="textInput"></label> */}
                {/* <p style={{fontSize: '30px', backgroundColor: 'purple'}}>{s1} {s2} {s3}</p> */}
                <p style={paraStyle}>{s1} {s2} {s3}</p>
                <p className={isWinner ? 'win' : 'loose'}>
                    Result: {isWinner? 'Winner' : 'Loser'}
                </p>
            </div>
        )
    }
}
