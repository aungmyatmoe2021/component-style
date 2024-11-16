import React from "react";

class Toolbar extends React.Component{
    render(){
        const styles = {
            toolbar: {
                marginBottom: 20,
                border: '1px solid red',
            },
            dark : {
                background: 'purple',
                color: 'white',
            }
        };

        return(
            <div style={(styles.toolbar,styles.dark)}>
                {this.props.children}
            </div>
        );
    }
}

export default Toolbar;