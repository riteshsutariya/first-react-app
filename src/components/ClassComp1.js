/*import React from "react";

class ClassComp1 extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
        this.HandleClick=this.HandleClick.bind(this);
    }
    HandleClick(){
        this.setState((PrevState)=>{
            return{
                count:PrevState.count+1
            };
        });
    };
    render()
    {
        const {count}=this.state;
        return 
        <>
        <h1>total clicks {this.state.count}</h1>
        <button onClick={this.HandleClick}></button>
        </>
    }
}

export default ClassComp1;*/
import React from "react";
// import ReactDOM from "react-dom";

class ClassComp1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }


    handleClick() {
        this.setState((prevState) => {
          return {
            counter: prevState.counter + 1
          };
        });
      
        console.log("counter", this.state.counter);
      }
      
  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Increment counter</button>
        <div>Counter value is {counter}</div>
      </div>
    );
  }
}

export default ClassComp1