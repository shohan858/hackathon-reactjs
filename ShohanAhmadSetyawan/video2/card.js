const Card =(props) =>{
    return(
    <div class="card">
    <p class="title">{props.name}</p>
    <p>{props.desc}</p>
  </div>
    )
  }
  const App = () =>{
    return(
    <div>
      <Card name="shohan" desc="backend" />
      <Card name="shohan" desc="backend" />
      <Card name="shohan" desc="backend" />
    </div>
    )
  }
  
  ReactDOM.render(<App />,
                 document.querySelector('#root')
                 )